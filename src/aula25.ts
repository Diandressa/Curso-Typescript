//Metodos:Setter
//Setter - serve para modificar um valor
//Getter - para obter um valor

class ContaUsuario {
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

    // Getter

    //indicar que é um metodo getter
    //os metodos sao usados podem ser usados como se fossem propriedades, 
    // podem ser usadas com variaveis, podemos chamar elas no lugar de saldoconta agora
    //somente o get pode retornar/return algo
    get saldo():number{ 
        return this.saldoconta
    }

    //Setter

    //set precisa receber um valor para setar
    //vou setar o saldoconta ao chamar esse metodo
    //posso deixar private
    private set saldo(saldoconta:number){ 
        this.saldoconta = saldoconta
    }


    protected deposito(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        // usa o metodo saldo do get, ele retorna o saldo
        this.saldo += valor
    }

    protected saque(valor:number){
        if(valor < 0){
            console.log(`Valor inválido`)
            return
        }
        if(valor <= this.saldoconta){
            // usa o metodo saldo do get
            this.saldo -= valor
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
}

class ContaUsuarioX extends ContaUsuario {
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
class ContaUsuarioY extends ContaUsuario {
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

const contaUsuario1 = new ContaUsuarioX(111, "Cristina");
const contaUsuario2 = new ContaUsuarioY(222333, "Nicolau");

//console.log(cont1.titular)
//console.log(cont1.numero)

contaUsuario1.deposito(800)
contaUsuario1.deposito(200)
contaUsuario1.deposito(1000)
//contaUsuario1.saque(1000)
//console.log(contaUsuario1.saldo())

//--- Setter
//vou enviar o valor para o metodo setter saldo
//altero o saldo com o setter
//contaUsuario1.saldo = 250

//--- Getter
//com o metodo setter o saldo() não precisa de parênteses pq ele pode ser usado como uma propriedade sendo chamada e não uma função
console.log(contaUsuario1.saldo)

// contaUsuario2.deposito(10000)
// contaUsuario2.deposito(10000)
// contaUsuario2.deposito(10001)
// console.log(contaUsuario2.saldo())

//con1.info()
//con2.info()