//a classe é um modelo 
class Computadorr{
    nome:string;
    ram:number;
    cpu:number;
    ligado:boolean;

    //função construtora - é uma funçao, como esta dentro de uma classe chamamos de método da classe
    
    constructor(nome:string, ram:number, cpu:number){
        //recebe o parametro e associa com a propriedade usando this (this -> vai usar a varivel nome dessa classe e atribuir o parametro recebido nome)
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false; //todos vao ser false
        console.log(`Novo computador criado: nome ${nome}, ram ${ram} e cpu ${cpu}`)
    }
}

//instanciar uma classe -> cria o objeto da classe

//criar o objeto e ja passar o parametro pra ele
const compp1 = new Computadorr("Laptop", 64, 10);
const compp2 = new Computadorr("Desktop", 32, 5);
const compp3 = new Computadorr("Gamer", 128, 10);
