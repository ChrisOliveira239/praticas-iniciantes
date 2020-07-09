const deValores = {
    _valor: 1,
    get valor() {return this._valor} ,
    set valor(x){this._valor=x}
}

console.log(deValores.valor)
deValores.valor = 100

console.log(deValores.valor)
