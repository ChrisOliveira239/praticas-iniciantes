let pessoa = function (nome){
    this.nome = nome;
    this.falar = ()=>console.log(`olá, meu nome é ${nome}`)
}
let jovem =  new pessoa('cleber');
jovem.falar();
let j1 = new pessoa('chris');

j1.falar();