let lista =  Array();

function entrada(){
    let numero = document.getElementById('num');
    if(numero.value.length < 1){
        alert(`ERRO, nenhum número informado`);
    }
    else{
        numero = Number(numero.value);
        if(numero > 100 || numero < 1){
            alert(`erro ${numero} não é um numero válido`);
        }
        else{
            adicionar(numero)
        }
    }
}
function adicionar(numero){
    var res =document.getElementById('res');
    let tab = document.getElementById('tab');
    var elemento = document.createElement('option');
    var prim = document.getElementById('prim');

    if(lista.length == 0){
        tab.removeChild(prim);
    }
    if(lista.indexOf(numero)>-1){
        alert( `ESSE NUMERO JÁ EXISTE NA LISTA  `)
    }
    else{
        if(res.value == 1){
            res.innerHTML = '';
            res.value = 0
        }
        
        lista.push(numero);
        elemento.text = `numero adicionado - ${numero}`
        tab.appendChild(elemento)
    }
    
}
function finalizar(){
    
    var quant = lista.length;
    var maior;
    var menor;
    var soma = 0;
    var res = document.getElementById('res')

    if(res.value == 1){
        alert('ADICIONE NOVOS NUMEROS')
    }
    else{
        for (var c in lista){
        if(c == 0){
            maior = lista[c];
            menor = lista[c];   
        }
        if (lista[c] > maior){
            maior = lista[c];
        }
        if (lista[c] < menor){
            menor = lista[c];
        }
        soma += lista[c]
    }
        var media = soma / quant;
        var par = document.createElement('p')
        
        par.innerHTML=`Maior = ${maior} <br> 
        Menor = ${menor}<br> 
        Soma = ${soma}<br> 
        Média = ${media}<br>
        Itens = ${quant}<br>`;
    
    
    res.appendChild(par);    
    res.value = 1;
}
}




