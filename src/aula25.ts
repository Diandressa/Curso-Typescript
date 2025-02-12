class ContaUser {
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
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        this.saldoconta += valor
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldoconta){
            this.saldoconta -= valor
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
}

class ContaUserX extends ContaUser {
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

    public saque(valor:number){
        if(valor > 1000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else {
            super.saque(valor)
        }
    }
}
class ContaUserY extends ContaUser {
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

    public saque(valor:number){
        if(valor > 10000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        } else {
            super.saque(valor)
        }
    }
}

const contauser1 = new ContaUserX(111, "Cristina");
const contauser2 = new ContaUserY(222333, "Nicolau");

//console.log(cont1.titular)
//console.log(cont1.numero)

contauser1.deposito(800)
contauser1.deposito(200)
contauser1.deposito(1000)
contauser1.saque(1000)
contauser1.saque(1000)
contauser1.saque(10)
console.log(contauser1.saldo())

// contauser2.deposito(10000)
// contauser2.deposito(10000)
// contauser2.deposito(10001)
// console.log(contauser2.saldo())

//con1.info()
//con2.info()