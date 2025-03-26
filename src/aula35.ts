//Desestruturação - é uma expressão que permite extrairmos dados de um objeto ou array para variáveis simples
//passar as propriedades ou array para variáveis

//let aa,bb,cc,dd

//desestruturar o array nas variáveis
//let array = [10,20,30,40]

//Sem a desestruturação - cada variável declarada recebe um valor do array conforme a posição
/*
aa = array[0]
bb = array[1]
cc = array[2]
dd = array[3]
*/

//com a desestruturação
//o elemento que tenho do lado esquerdo tem que ser o mesmo do lado direito, no caso do exemplo é um array
//[]=[]

//declara as variáveis aqui, coloca a array declarada
//let array = [10,20,30,40]
//let [aa,bb,cc,dd] = array

//let [aa,bb,cc,dd] = [10,20,30,40]
//let [aa,bb,cc,dd] = ["Verde","Amarelo","Azul",40]

//Com objetos
//armazena nas variáveis cada valor do objeto

const obj={
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco"
}

//objeto precisa de chaves dos dois lados, o segundo é uma var com um objeto já (obj)
let {cor1,cor2,cor3,cor4} = obj

console.log(cor1)
console.log(cor2)
console.log(cor3)
console.log(cor4)