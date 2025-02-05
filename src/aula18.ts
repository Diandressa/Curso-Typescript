//a classe é um modelo 
class Computado{
    nome:string;
    ram:number;
    cpu:number;
    ligado:boolean;
    
    //metodo executado quando a classe é iniciado
    constructor(nome:string, ram:number, cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false; //todos vao ser false
    }

    //

    info():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------");
    }

    //metodo que modifica valores

    //metodo para ligar e desligar o computador
    ligar():void{
       this.ligado = true; 
    }

    desligar():void{
        this.ligado = false; 
     }
}

const com1 = new Computado("Laptop", 64, 10);
const com2 = new Computado("Desktop", 32, 5);
const com3 = new Computado("Gamer", 128, 10);

//como o metodo é publico posso alterar, porem isso é errado, tenho que proteger essas alterações para que não consiga alterar sem antes tratar os dados corretamente
/*
com1.ligado = true;
com1.ram = -100;//menos 100 de ram nao existe
*/

//preciso proteger as propriedades falando que sao privadas, só a classe pode alterar as propriedades. Criamos métodos nas classes para modificar so valores

//chamar o metodo info
com1.ligar(); //acesso metodo ligar para alterar o valor
com3.ligar();

//se preciso desligar chama o metodo desligar
com1.desligar();

com1.info();
com2.info();
com3.info();