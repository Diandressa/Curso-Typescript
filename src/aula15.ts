//REST é um espalhador 
/*
function fsoma(v1:number, v2:number,v3:number){
    return v1 + v2 + v3
}

console.log(fsoma(10,20,30));
*/

//se eu quiser enviar mais um valor na função tenho que receber mais um parametro e colocar mais um numero no return

//com o parametro REST podemos receber vários valores na função

// ... esses três pontos são chamados de spread

//preciso especificar que o n vai ser uma array -  essa array vai acumular o numeros passados na funçao
/*
function fsoma(...numeros:number[]){
    let s:number = 0;

    numeros.forEach((numero)=> {
        console.log(numero)
        s = s + numero; //soma os valores enviados pra função
    })

    return s;
}

console.log(fsoma(10,20,30,40));
*/

function fsoma(...numeros:number[]){
    let s:number = 0;

    //definido a variavel primeiro e o array depois
    for(let numero of numeros){
        s += numero
    }

    //ou forEach

    /*
    numeros.forEach((numero)=>{
        s += numero;
    })
    */

    return s;
}

console.log(fsoma(10,20,30,40))

//usamos REST para espalhar um array

//o forEach é só para iterar um array
// o for itera qualquer coisa, objeto, array (uma coleçao de elementos)