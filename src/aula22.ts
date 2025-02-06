//Classe pai
class Cont {
    //Public: acessado de qualquer lugar
    //Private: Acessado somente na sua própria classe
    //Protected: Acessado somente na sua própria classe e nas classes filho

    //public numero:number
    //public titular:string

    // private numero:number
    // private titular:string

    //para acessarmos da classe filho
    protected numero:number
    protected titular:string

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular
    }

    //funcao só pode acessar nessa classe
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    //as variaveis dentro de funcoes precisar ser usadas com this. para dizer que é a variaver criada nessa classe
    //se puplic consigo acessar fora da classe, se protected só consigo usar nas classe filhas
    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Número: ${this.numero}`)
        console.log(`-------------`)
    }
}

class ContPF extends Cont {
    cpf:number
    constructor (cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
        //posso acessar uma var public de outra classe
        //console.log(`Conta PF criada: ${this.titular}`)

        //Modo errado: para acessar a variavel private da classe pai posso usar o super, que acessa a classe pai, ao seu constructor especificamente. O construtor da classe pai espera uma string enao uma var
        //console.log(`Conta PF criada: ${super(titular)}`)

        console.log(`Conta PF criada: ${titular}`)
    }
}
class ContPJ extends Cont {
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ criada: ${titular}`)
    }
}

const cont1 = new ContPF(111, "Cristina");
const cont2 = new ContPJ(222333, "Nicolau");

//console.log(cont1.titular)
//console.log(cont1.numero)

//cont1.info()