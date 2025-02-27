//abstract uma classe abstrata, isso bloqueia usar essa classe para criação de objetos 
//com o abstract ela serve só para ser extendida/ herdada por outras classes
//elas nao podem ser instanciadas
abstract class Conta2 {
    //Modificadores:
    //readonly faz com que ele nao seja alterado, é somente para leitura
    private readonly numero:number
    protected titular:string
    private saldoconta:number

    constructor(titular:string){
        this.numero = this.gerarNumeroConta();
        this.titular = titular
        this.saldoconta = 0
        //no constructor da classe ele permite a mudança, no momento de construir
        this.numero = 0
    }

    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1;
    }

    protected info(){
        //fora do constructor nao pode alterar numero somente leitura
        //this.numero = 0
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

class Conta2PF extends Conta2 {
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
class Conta2PJ extends Conta2 {
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

const conta2pf = new Conta2PF(111, "Cristina");
const conta2pj = new Conta2PJ(222333, "Nicolau");
//A conta ou é de Pessoa Física ou de pessoa juridica, não faz sentido que a classe pai conta seja usada, ela não pode gerar objetos. Ele é só uma classe base para criação de outras classes.
//Para bloaquer a a criação de objetos com a classe pai usamos o Abstract
//const conta3 = new Conta2("Andressa");


conta2pf.deposito(800)
conta2pj.deposito(200)
conta2pj.deposito(1000)
//contaUsuario1.saque(1000)
//console.log(contaUsuario1.saldo())

//--- Setter
//vou enviar o valor para o metodo setter saldo
//altero o saldo com o setter
//contaUsuario1.saldo = 250

//--- Getter
//com o metodo setter o saldo() não precisa de parênteses pq ele pode ser usado como uma propriedade sendo chamada e não uma função
console.log(conta2pj.saldo)

// contaUsuario2.deposito(10000)
// contaUsuario2.deposito(10000)
// contaUsuario2.deposito(10001)
// console.log(contaUsuario2.saldo())

conta2pf.info()
//con2.info()