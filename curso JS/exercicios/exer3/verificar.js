function infos(){
    
    var idade = document.getElementById('idade').value;
    var ano = new Date;
    var txt = document.getElementById('txt');
    ano = ano.getFullYear();
    

    if(idade > ano){
        txt.innerHTML = 'ERRO, IDADE INVÁLIDA';
    }
    else{
        idade = ano - idade; 
        analise(idade) ; 
    }
}

function analise(idade){
    var imagem = document.getElementById('imagem');
    var cores = document.body.style;
    var txt = document.getElementById('txt');
    var sexo = document.getElementsByName('sex');
    

    if(sexo[0].checked){
        cores.backgroundColor = '#00BFFF';

        if(idade >= 0 && idade <= 12){
            imagem.src = 'imagens/mcrianca.png';
            txt.innerHTML = `Você é um garoto de ${idade} anos`;
        }
        else if(idade >= 13 && idade <= 25){
            imagem.src = 'imagens/mjovem.png';
            txt.innerHTML = `Você é um jovem de ${idade} anos`;
        }
        else if(idade>= 26 && idade <= 50){
            imagem.src = 'imagens/madulto.png';
            txt.innerHTML = `Você é um homem adulto de ${idade} anos`;
        }
        else{
            imagem.src = 'imagens/midoso.png';
            txt.innerHTML = `Você é um homem idoso de ${idade} anos`;
        }

    
    }
    else if(sexo[1].checked){
        cores.backgroundColor = '#FFC0CB';

        if(idade >= 0 && idade <= 12){
            imagem.src = 'imagens/fcrianca.png';
            txt.innerHTML = `Você é uma garota de ${idade} anos`;
        }
        else if(idade >= 13 && idade <= 25){
            imagem.src = 'imagens/fjovem.png';
            txt.innerHTML = `Você é uma jovem de ${idade} anos`;
        }
        else if(idade>= 26 && idade <= 50){
            imagem.src = 'imagens/fadulto.png';
            txt.innerHTML = `Você é uma mulher adulta de ${idade} anos`;
        }
        else{
            imagem.src = 'imagens/fidosa.png';
            txt.innerHTML = `Você é uma mulher idosa de ${idade} anos`;
        }
    
        }
}
