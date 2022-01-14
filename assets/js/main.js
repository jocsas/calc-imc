const form = document.querySelector('#form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight')
    const inputHeight = e.target.querySelector('#height')

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    //Checks if values are valid


    if (!weight) {
        setResult('Peso inválido', false)
        return;
    }
    if (!height) {
        setResult('Altura inválida', false)
        return;
    }

    const imc = getImc(weight, height);
    const rangeImc = getRangeImc(imc);

    const msg = `Seu IMC é ${imc} (${rangeImc}).`;
    
    setResult(msg, true);
});

function getRangeImc (imc){
    const range = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade de grau 1',
        'Obesidade de grau 2',
        'Obesidade de grau 3'
    ];
    if (!imc || imc < 10) return "Procure um médico urgente";
    if (imc >=39.9) return range[5];
    if (imc >= 34.9) return range[4];
    if (imc >= 29.9) return range[3];
    if (imc >= 24.9) return range[2];
    if (imc >= 18.5) return range[1];
    if (imc < 18.5) return range[0];
    
}

function getImc(weight, height) {
    const imc = weight / height ** 2
    return imc.toFixed(2);
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const result = document.querySelector('#result')
    result.innerHTML = '';
    const p = createP();
    if(isValid){
        p.classList.add('setColorValid')
    }else{
        p.classList.add('setColorInvalid')
    }
    p.innerHTML = msg;
    result.appendChild(p);   
}