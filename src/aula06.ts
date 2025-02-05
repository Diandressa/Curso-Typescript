/*
//array do tipo number
let numeros:number[]=[10,20,30,40];

// Outra forma de declarar array do tipo number
let numeros2:Array<number|string> = [10,20,30,40, "Andressa"];

// Outra forma de declarar array do tipo number
let numeros3:(number|string)[] = [10,20,30,40, "Andressa"];
*/

let numeros:number[]=[10,20,30,40];

//inseri novo valor no final do array
numeros.push(10);

//inseri novo valor no inicio do array
numeros.unshift(10);

//retira o ultimo elemento do array
numeros.pop();

//retira o primeiro elemento do array
numeros.shift();

console.log(numeros)

//o ReadonlyArray(somente leitura) é um array que não pode ser alterado, não podemos inserir nem retirar elemento

let numeros_ro:ReadonlyArray<number> = [100,200,300];
//nao disponibiliza os metodos que alteram arrays

console.log(numeros_ro)

//para visualizar abrir terminal e digitar node aula06.js