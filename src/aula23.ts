class Con {
    //Modificadores:
    //Public: acessado de qualquer lugar
    //Private: Acessado somente na sua própria classe
    //Protected: Acessado somente na sua própria classe e nas classes filho
    protected numero:number
    protected titular:string
    private saldoconta:number

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular
        this.saldoconta = 0
    }

    //funcao só pode acessar nessa classe
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    //protected posso acessar da classe filha
    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }

    //metodo para saldo
    public saldo():number{
        return this.saldoconta
    }

    //metodo para saldo, somente acessado por essa classe e as classes filhas
    protected deposito(valor:number){
        this.saldoconta += valor
    }

    protected saque(valor:number){
        //se o valor que quero tirar for maior que o saldo da minha conta
        if(valor >= this.saldoconta){
            this.saldoconta -= valor
        }

        //se o valor que quero tirar for menor do que tenho na minha conta, no saldo ele nao deixa tirar

        console.log(`Saldo insuficiente`)
    }
}

class ConPF extends Con {
    cpf:number
    constructor (cpf:number, titular:string){
        super(titular)
        this.cpf = cpf
        //imprimo a variavel da classe pai sem o this
        //console.log(`Conta PF criada: ${titular}`)

        //consigo acessar as funcoes da classe pai com o this.info() no constructor 
        //this.info()
    }

    //quero criar uma info para essa classe, mostrando as informações dela
    //essa funcao é public, posso usar fora da classe
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
class ConPJ extends Con {
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
        //console.log(`Conta PJ criada: ${titular}`)
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

const con1 = new ConPF(111, "Cristina");
const con2 = new ConPJ(222333, "Nicolau");

//console.log(cont1.titular)
//console.log(cont1.numero)

//con1 é pessoa fisica
con1.deposito(800)
con1.deposito(200)
con1.deposito(1000)
console.log(con1.saldo())

con2.deposito(10000)
con2.deposito(10000)
con2.deposito(10001)
console.log(con2.saldo())

//con1.info()
//con2.info()