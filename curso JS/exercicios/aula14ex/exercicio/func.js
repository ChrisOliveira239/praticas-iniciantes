function contar(){
    var ini = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var pass = document.getElementById('passo');
    var txt = document.getElementById('txt');

    var ti = ini.value.length;
    var tf = fim.value.length;
    var tpa = pass.value.length;
    
    
    if(ti == 0 || tf == 0){
        alert( "ERRO NA ENTRADA DE DADOS");
    }
    else{
        if(tpa==0){
            alert("passo assumido como 1");
            pass.value = 1;
        }
        ini = Number(ini.value);
        fim = Number(fim.value);
        pass = Number(pass.value);
        txt.innerHTML = ''
        if(ini < fim){

            for(c = ini ; c<=fim ; c+=pass){
                txt.innerHTML += `${c} ->`;
            }
            txt.innerHTML +="Fim";
        }
        else if(ini > fim){
            for(c=ini ; c >= fim;c-=pass){
                txt.innerHTML += `${c} ->`;
            }
            txt.innerHTML += 'Fim';
        }
    }
}