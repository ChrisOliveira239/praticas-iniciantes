var lista = [1,2,3,4];
var somalista = 0;
var tamanho = lista.length;

console.log(lista.length);
for (var c in lista){
    somalista += lista[c];
}
var media = somalista / tamanho;
console.log(media)
