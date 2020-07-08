let rolagem = ()=>Math.floor(Math.random()*6+1);

let dado1 = rolagem();
let dado2 = rolagem();

var contador = 0;
console.log(`d1 = ${dado1} \n d2 = ${dado2}`)
while (dado1 != 6 || dado2 != 6){
    dado1 = rolagem();
    dado2 = rolagem();
    contador ++ ;
    console.log(`d1 = ${dado1} \n d2 = ${dado2}\n`)
}
console.log(`-------final-------- \nd1 = ${dado1} \n d2 = ${dado2}`)