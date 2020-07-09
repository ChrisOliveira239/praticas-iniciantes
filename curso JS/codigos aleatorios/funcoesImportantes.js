const pessoa = {
    nome: 'Bruna',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([key,valor]) => {
    console.log(`${key} : ${valor}`)
    
});