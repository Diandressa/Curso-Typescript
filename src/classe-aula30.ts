//Preciso exportar essa classe para outro arquivo usar 
//Podemos exportar uma classe, função, array, objeto ...

export const Coisas=["Corda","Pilha","Lampada","Chave"]

export class Pessoa {
    nome:string
    altura:number
    constructor(nome:string, altura:number){
        this.nome = nome
        this.altura = altura
    }
}

export class Objeto{
    nome:string
    constructor(nome:string){
        this.nome = nome
    }
}


