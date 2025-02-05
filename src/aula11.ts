let nvalor:number;
let svalor:string;
let uvalor:unknown;
/*
uvalor = 10;
//nvalor=uvalor; não é possível pq o uvalor é unknown - não da pra associar os tipos quando tem unknown a não ser que se faça uma afirmação de tipo

nvalor=<number>uvalor;
svalor=<string>uvalor;
svalor+=10;

console.log(typeof(uvalor)) //tipo number pq adicionou o numero 10
console.log(uvalor)

console.log(typeof(nvalor)); //tipo number agora
console.log(nvalor);

console.log(typeof(svalor)); //tipo number porque o valor inserido na variavel foi um numero
console.log(svalor);

svalor = '20';
//nvalor=<number>svalor; // svalor é uma string, não associa string com number, é preciso converter o number para unknown

nvalor=<number><unknown>svalor;


console.log('nvalor: ' + typeof(nvalor));
console.log('nvalor: ' + nvalor);
*/

//Converter efetivamente um tipo

//uvalor = 10;
//svalor = '20';

//tipo string = tipo number
//nvalor=svalor;

//nvalor=Number.parseInt(svalor); //parseINT converte para number

uvalor = 10;
nvalor = 10;

//string = number
//svalor = nvalor;

svalor = nvalor.toString(); // conver number em string

console.log(typeof(nvalor));
console.log(nvalor);

//em typescript o float ou int é entendido como number

/*
Type Assertion = Associação de Tipos. 

Typecasting = Conversão de Tipos. parseInt e toString
*/