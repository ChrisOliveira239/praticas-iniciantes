function resultado(ret){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let display = document.getElementById('res');
    let parImpar = document.getElementById('qual');

    if(ret=='resto'){
        if (num1.length >= 1 && num2.length >=1){
            num1 = Number(num1);
            num2 = Number(num2);
            let resposta = num1%2==0?`o numero ${num1} é par`:`o numero ${num1} é impar`;
            
            display.innerHTML = `o resto da divisão entre ${num1} e ${num2} é ${num1%num2}`;
            parImpar.innerHTML = resposta
        }
        else{
            display.innerHTML = 'Erro, não foram apresentados <br> numeros suficientes'
        }}
    else if (ret == 'multi'){
        num1 = Number(num1);
        num2 = Number(num2);

        display.innerHTML = `${num1} X ${num2} = ${num1 * num2}`;
        

    }
    else if (ret == 'desc'){
        num1 = Number(num1);
        num2 = Number(num2);

        if(num2 > 100){
            display.innerHTML = 'Quantidade de desconto não aceita';
        }
        else{
            let desconto = (num1/100)*num2;
            let preDescont = num1-desconto;

            display.innerHTML = `o preço de R$${num1} com um desconto de <br>
            ${num2}% (R$${desconto})passa a ser R$${preDescont}`;
        }
    }


}

function idade(){
    let display = document.getElementById('res');
    let data = document.getElementById('nascimento').value;
    let dia = data.slice(0,2);
    let mes = data.slice(2,4);
    let ano = data.slice(4,8);
    let compl = [dia, '/',mes,'/',ano].join('');
    
    if (data.length < 8){
        display.innerHTML = 'data inválida';
    }
    else{
        const atual = new Date();
        let diaA = atual.getDate();
        let mesA = atual.getMonth() + 1;
        let anoA = atual.getFullYear();
        
        let idadeA = anoA - ano;

        if(idadeA > 18){
            display.innerHTML = 'maior de idade, '+idadeA+" anos";
        }
        else if(idadeA == 18){
            if (mesA > mes){
                display.innerHTML = 'se tornou maior de idade este ano';
            }
            else if(mesA == mes){
                if (diaA > dia){
                    display.innerHTML = 'se tornou maior de idade este mês';
                }
                else if(diaA == dia){
                    display.innerHTML = 'parabéns por seu aniversario de 18 anos!'
                }
                else{
                    
                    display.innerHTML = 'menor de idade';
                }
            }
            else{
                display.innerHTML = 'menor de idade';
            }
        }
        else{
            display.innerHTML = 'menor de idade';
        }
    }
}