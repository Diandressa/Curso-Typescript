//modificadores de acesso: public, private e protected 

//Public - é o metodo padrao, não preciso modicar na claase
//o metodo ou propriedade com modificador public pode ser acessados de qualquer lugar (dentro da classe, fora da classe, ou por filhos da classe)

class Computa{
    private id:number;

    //quando nao defino o mofificador ele é consiferado como public, mas podemos explicitar que é public
    public nome:string; 

    //ao usar private nao podemos acessar fora da classe 
    private ram:number;
    private cpu:number;

    //protected a propriedade nao pode ser alterado fora da classe, consigo alterar pela classes filhas dessa classe - ver na próxima aula sobre herança
    protected ligado: boolean;
    
    
    constructor(nome:string, ram:number, cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false; 
        this.id=0;//todos como zero inicialmente 
    }

    info():void{
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------");
    }

    ligar():void{
       this.ligado = true; 
    }

    desligar():void{
        this.ligado = false; 
    }

    upRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000){
            this.ram = qtde
        } else {
            console.log(`Quantidade ${qtde} para computador ${this.nome} não é permitido`)
        }
    }
}

const co1 = new Computa("Laptop", 64, 10);
const co2 = new Computa("Desktop", 32, 5);
const co3 = new Computa("Gamer", 128, 10);

co1.ligar();
co3.desligar();

//como o metodo é public consigo acessar as propriedade e alterar os valores sem acessar o metodo da classe
/*
co1.ligado = true;
co2.ligado = false;
co3.ligado = false;
*/

//o public consigo mudar
co1.nome = "Notbook"

//a funcao esta permitindo qualquer valor, precisamos tratar os dados enviados pra ela
co1.upRam(-100);

co1.info();
co2.info();
co3.info();