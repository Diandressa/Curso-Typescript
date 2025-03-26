//Preciso exportar essa classe para outro arquivo usar 
//Podemos exportar uma classe, função, array, objeto ...

const Coisas=["Corda","Pilha","Lampada","Chave"]

//export default - item padrão á ser exportada
class Pessoa {
    nome:string
    altura:number
    constructor(nome:string, altura:number){
        this.nome = nome
        this.altura = altura
    }
}

class Objeto{
    nome:string
    constructor(nome:string){
        this.nome = nome
    }
}


//exportar em uma linha
export {Coisas, Objeto}

//export default em Pessoa, exportamos separados
export default Pessoa


