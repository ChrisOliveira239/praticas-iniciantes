function checar(){

    //Idade
    var data = new Date().getFullYear()
    var ano = document.getElementById('idade').value
    var res = document.getElementById('res')
    if (ano.lenght == 0 || ano > data){
        alert('erro, data inválida')
    }

    else{

        //Sexo
        var sex = document.getElementsByName('sex')
        var idade = data - ano
        var genero = ''

        //Imagem
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        //Variáveis
        if (sex[0].checked){
            genero = 'Masculino'
            document.body.style.backgroundColor = 'blue'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src','mcrianca.png')
            }
            else if(idade < 23){
                //adolescente
                img.setAttribute('src', 'mjovem.png')
            }
            else if(idade < 50){
                // adulto
                img.setAttribute('src','madulto.png')
            }
            else{
                // idoso
                img.setAttribute('src','midoso.png')
            }
            }
        
        else if (sex[1].checked){
            document.body.style.backgroundColor = 'pink'
            genero = 'Feminino'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src','fcrianca.png')
            }
            else if( idade < 23 ){
                //adolescente
                img.setAttribute('src','fjovem.png')
            }
            else if( idade < 50 ){
                // adulto
                img.setAttribute('src','fadulto.png')
            }
            else{
                // idoso
                img.setAttribute('src','fidosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Gênero ${genero}, idade ${idade}</p>`
        res.appendChild(img) 
}}
