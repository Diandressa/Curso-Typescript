class Contax {
    //Modificadores:
    protected numero:number
    protected titular:string
    private saldoconta:number

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular
        this.saldoconta = 0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }
    
    public saldo():number{
        return this.saldoconta
    }

    protected deposito(valor:number){
        this.saldoconta += valor
    }

    protected saque(valor:number){
        if(valor >= this.saldoconta){
            this.saldoconta -= valor
        }
        console.log(`Saldo insuficiente`)
    }
}

class ContaxPF extends Contax {
    cpf:number
    constructor (cpf:number, titular:string){
        super(titular)
        this.cpf = cpf

        //consigo acessar as funcoes da classe pai com o this.info() no constructor 
        //this.info()
    }

    info(){
        //quero imprimir as informações existentes na classe pai com o super, uso o super para acessar o info da classe pai
        console.log(`Tipo...: Pessoa Física`)
        super.info()
        console.log(`CPF...: ${this.cpf}`)
        console.log(`-------------------`)
    }

    public deposito(valor:number){
        if(valor > 1000){
            console.log(`Valor de deposito muito grande para este tipo de conta`)
        } else {
            super.deposito(valor)
        }
    }
}
class ContaxPJ extends Contax {
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
    }

    info(){
        console.log(`Tipo...: Pessoa Jurídica`)
        super.info()
        console.log(`CNPJ...: ${this.cnpj}`)
        console.log(`-------------------`)
    }

    public deposito(valor:number){
        if(valor > 10000){
            console.log(`Valor de deposito muito grande para este tipo de conta`)
        } else {
            super.deposito(valor)
        }
    }
}

const contax1 = new ContaxPF(111, "Cristina");
const contax2 = new ContaxPJ(222333, "Nicolau");

//console.log(cont1.titular)
//console.log(cont1.numero)

contax1.deposito(800)
contax1.deposito(200)
contax1.deposito(1000)
console.log(contax1.saldo())

contax2.deposito(10000)
contax2.deposito(10000)
contax2.deposito(10001)
console.log(contax2.saldo())

//con1.info()
//con2.info()