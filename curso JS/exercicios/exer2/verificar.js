
function horario(){
    var horas = new Date;
    var txt = document.getElementById('txt');
    var imagem = document.getElementById('imagem');
    var cores = document.body.style;
    horas = horas.getHours();
    horas = 19;
    if (horas >= 6 && horas <= 12){
        txt.innerText = 'BOM DIA';
        imagem.src = 'imagens/manha.png';
        cores.backgroundColor = '#fffad4';
    }
    else if( horas >= 13 && horas <= 18){
        txt.innerText = 'BOA TARDE !!';
        imagem.src = 'imagens/tarde.png';
        cores.backgroundColor = '#ffcc66';
    }
    else if(horas >= 19 && horas <= 23 || horas == 00){
        txt.innerText = 'BOA NOITE';
        imagem.src = 'imagens/noite.png';
        cores.backgroundColor = '#003333';
    }
    else{
        txt.innerText = 'você deveria estar dormindo';
        imagem.src = 'imagens/noite.png';
        cores.backgroundColor = '#003333';
    }
}


