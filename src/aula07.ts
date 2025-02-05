let coisasold:(number|string)[] = [10,20,30, 'teste'];

// Tuplas - Especificar cada tipo de dado para cada posição do array

let coisas:[string,number,number, boolean] = ["corda",10,10,true];

//alterar valores do array
coisas[3]=false

//o push funciona, mas como defini 4 elementos no array não consigo acessar esses novos adicionado
//coisas.push("kit médico,",5,10,true)
//console.log(coisas[4]);

//var para somente leitura - não permite alterar os valores e posicoes

let coisasLeitura:readonly[string,number,number, boolean] = ["corda",10,10,true];

console.log(coisas);
console.log(coisas[1]);

//para visualizar abrir terminal, entrar na pasta com cd build e digitar node aula07.js