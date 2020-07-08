

function multa(){
    var vel = document.getElementById('vel');
    var alerta = document.getElementById('alerta');
    var mensagem = document.getElementById('mensagem');
    vel = Number(vel.value);

    if(vel < 50){
        alerta.style.backgroundColor = 'green';
        alerta.innerHTML = 'CORRETO';
        mensagem.innerHTML = `sua velocidade de ${vel} está dentro dos padrões permitidos`;
    }
    else if(vel >= 50 && vel <= 60){
        alerta.style.backgroundColor = '#eead2d';
        alerta.innerHTML = 'CUIDADO';
        mensagem.innerHTML=`sua velocidade de ${vel} está próxima do limite de velocidade permitido`;
    }
    else{
        alerta.style.backgroundColor = 'red';
        alerta.innerHTML = 'MULTADO';
        mensagem.innerHTML=`sua velocidade de ${vel} está acima da velocidade permitida de 60 Km/h`;
    }
    
    
}

function nacionalidade(){
    var pais = document.getElementById('nacio');
    var txt = document.getElementById('txt');

    pais = String(pais.value).toLowerCase(pais);

    if(pais == 'brasil'){
        txt.innerHTML = `você é Brasileiro !!! `;
    }
    else {
        txt.innerHTML = `você é estrangeiro !!! `;
    }

}
