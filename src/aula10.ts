//NULL - UNDEFINED - UNKNOWN
// NULO -INDEFINIDO - DESCONHECIDO  

// NULL - é um valor, porem um valor nulo

// preciso definifir valores para variveis
// ao definir null posso deixar com o valor null (tipo de valor vazio)
let fnome:string| null;
fnome = null

console.log(fnome)

//UNDEFINED - quando não especifico o tipo ela se torna uma variavel tipo any com valor indefinido/undefined

let fnome2;
console.log(fnome2);

//UNKNOWN  - tipo unknown ao receber um valor continua do tipo unknown, podemos adicionar um valor e não um tipo diferente ao declarar a variavel

let fnome3:unknown=10;
//fnum é do tipo unknown ainda
//let fnum = fnome3;

//da erro pq fnome3 é do tipo unknown, não conseguimos definir a fnum com outro tipo
//let fnum:number = fnome3;

//só da pra tipar como any ou unknown quando usamos o unknown
//let fnum:any = fnome3;


console.log(fnome3)