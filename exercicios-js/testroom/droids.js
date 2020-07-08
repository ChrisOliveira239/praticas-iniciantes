function repet3(){
    let texto = document.getElementById('texto').value;
    const mostrar = document.getElementById('mostrar');
    texto = Number(texto)


    let numero = Math.floor(Math.random()*10+1);
    let resultado = numero == texto ? `os numeros ${texto} e ${numero} são iguais`:`${texto} ${numero}`;
    alert(resultado)

    let data = new Date;

    let dia = data.getDate();
    let mes = data.getMonth()+1;
    let ano = data.getFullYear();
    alert(`${dia} ${mes} ${ano}`)

    
   
}