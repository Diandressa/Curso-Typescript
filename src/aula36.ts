//Desestruturação part2

const obj={
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco"
}

//objeto precisa de chaves dos dois lados, o segundo é uma var com um objeto já (obj)
let {cor1,cor2,cor3,cor4} = obj

// Em javascript isso seria possível
//let [num1,num2,num3] = [10]

//Em typscript precisamos colocar um valor padrão nas variáveis que não receberam valor. Caso num2 ou num3 recebera um valor, então ele é colocada na sequência.
//let [num1,num2=0,num3=0] = [10, 20]

//Quando declaramos mais valores do que variáveis, como só tem 3 variáveis declaradas é recebido 3 primeiro valores da sequência.
//let [num1,num2=0,num3=0] = [10, 20,30,40,50,60,70,80,90]

//Quando o operador rest ou spread (...) significa que a primeira e o segunda variável recebem o primeiro e o segundo valor, o restando é guardado na terceira variável. Armazena o restante dos valores como um array
let [num1,num2=0,...num3] = [10, 20,30,40,50,60,70,80,90]

console.log(num1)
console.log(num2)
console.log(num3)

//Posso desestruturar com o retorno de alguma função que retorna valores
const cores = ()=> {
    return ["Verde", "Amarelo", "Azul", "Branco"]
}

let [c1,c2,c3,c4] = cores()

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

// Desestruturação com string usando split onde tem espaço, retorna um array com 3 elementos
let texto="Curso de Typescript"
//spread guarda todos os valores 
//let [...t] = texto.split(" ")

//desestrutura as palavras
let [p1,p2,p3] = texto.split(" ")

//console.log(t)
console.log(p1)
console.log(p2)
console.log(p3)


