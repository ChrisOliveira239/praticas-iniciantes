function contar(){
    //VALIDAÇÃO
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    //VALIDAÇÃO DE RESPOSTAS
    if (inicio.value.length == 0 || fim.value.length == 0){
        alert('ERRO, dados em falta')
    }
    
    
    //CONTAGEM
    else{
        res.innerHTML = ''
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            //VALIDANDO PASSOS
            alert('passo inválido, assumido como 1')
            p = 1
        }
        if (f > i){
            //CRESCENTE
            for (var c = i;c <= f; c+=p)
            res.innerHTML += `${c} - >`
        }
        else if (i > f){
            //REGRESSIVA
            for(var c = i; c >= f; c-= p ){
                res.innerHTML += `${c}  - > `
            }
        }
    res.innerHTML += 'Fim'
    }
}