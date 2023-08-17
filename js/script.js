let nome = document.querySelector('#nome');
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let btncalc = document.querySelector('#btncalc');
let caixaResultado = document.querySelector('#caixaresult');
let h2 = document.querySelector('#resultImc')
let paragraph = document.querySelector('#riscoImc')



btncalc.addEventListener('click', calcularResult);

function calcularResult() {
    let nomeValor = nome.value;
    let pesoValor = peso.value;
    let alturaValor = altura.value;

    if (nomeValor === '' || pesoValor === '' || alturaValor === '') {
        h2.textContent = 'Preencha todos os campos!';
        paragraph.textContent = ''; 
        return;
     }


    let imc = pesoValor / (alturaValor * alturaValor);

    h2.textContent = ` Olá ${nomeValor} seu Imc e: ${imc.toFixed(2)}`;




    if (imc < 18.5) {
        paragraph.textContent = 'Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc <= 24.9) {
        paragraph.textContent = 'Você está no peso ideal.';
    } else if (imc >= 25 && imc <= 29.9) {
        paragraph.textContent = 'Você está com sobrepeso.';
    } else if (imc >= 30 && imc <= 34.99) {
        paragraph.textContent = 'Você está com obesidade grau 1.';
    } else if (imc >= 35 && imc <= 39.99) {
        paragraph.textContent = 'Você está com obesidade grau 2.';
    } else {
        paragraph.textContent = 'Você está com obesidade grau 3 (Mórbida).';
    }
    nome.value = '';
    peso.value = '';
    altura.value = '';
    
    return;
}


