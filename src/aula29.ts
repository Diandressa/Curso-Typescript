//Generics 

//parametro de entrada vai ser uma string e o retorno da funcao vai ser uma string tb
/*
function f_teste(v:string):string{
    return v
}
*/

/* Podemos usar o GENERICS em vez do any para operar com qualquer tipo
function f_teste(v:any):any{
    return v
}
*/

//Queremos uma função que pode usar/operar com qualquer tipo de valor, podemos usar o Generics 
// dentro dos sinais < > passamos o tipo de dado que a função vai operar, pode ser qualquer caracter e seprar por vírgula se for mais de um
// a letra indica a ordem de entrada dos parametros e o tipo de retorno , elas simbolizam o tipo 
//o retorno e parametro vai ser do tipo definido do <>
/*
function f_teste<T>(v:T):T{
    return v
}
*/


function f_teste<T, U>(v:T, r:U):U{
    //nao podemos retornar v pq v é um parametro do tipo diferente do esperado do retorno da função
    //return v
    //só retorna o r que é o segundo tipo informado ao chamar a função, pq o segundo tipo é do tipo U e o retorno da função tem que ser do tipo U
    return r
}


//ao chamar a funcao especificamos qual tipo irá receber o T ou U
//assim nao altero a função, eu mando o tipo quando eu chamo ela
//se tiver dois tipos não é obrigado a especificar os dois quando chama
/*
console.log(f_teste<number, string>(10, "B"))
console.log(f_teste<string, number>("10", 10))
console.log(f_teste<boolean, boolean>(true, false))
*/


//GENERICS podemos usar em função, interfaces, classes

//quando eu instanciar a classe preciso informar esse tipo T
class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<string>("10")
const ct2 = new C_teste<number>(10)

console.log(ct1.valor)
console.log(ct2.valor)