let lamp = document.getElementById('lamp');

let ascender = ()=>lamp.src = 'acesa.jpg';
let apagar = ()=>lamp.src = 'apagada.jpg';

function mudarCor(cor){
    let fundo = document.body;
    

    if(cor == 'gr'){
        fundo.style.backgroundColor = 'green';
    }
    else if(cor == 'rd')
        fundo.style.backgroundColor = 'red';
}

function sauda(){
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobre').value;
    alert (`olá ${nome} ${sobrenome}`)

}

function cpfCaixa1(){
    let cpf = document.getElementById('cpf1').value;
    let mostrar = document.getElementById('caixa1');
    if(cpf.length == 11){
        var cpfEd = [cpf.slice(0,3),'.',cpf.slice(3,6),'.',cpf.slice(6,9),'-',cpf.slice(9,11)].join('');
        mostrar.innerHTML = cpfEd;
    }
    else{
        mostrar.innerHTML = cpf;
    }

    
}

function soma(){
    let num1 = document.getElementById('soma1').value;
    let num2 = document.getElementById('soma2').value;
    let somado = document.getElementById('caixa2');

    if(num1.length >= 1 && num2.length>=1){
        num1 = Number(num1);
        num2 = Number(num2);

        somado.innerHTML = `${num1 + num2}`
    }
    else{
        somado.innerHTML = "faltam numeros";
    }
}

function mostrarTexto(){
    let textual = document.getElementById('carregamento');
    textual.innerHTML = 'Esse texto foi inserido pelo JavaScript...'
}
    
    
    

    

