//Classe pai
class Conta {
    public numero:number
    public titular:string

    constructor(numero:number, titular:string){
        this.numero = numero;
        this.titular = titular
    }
}

//Classe filha, herda as propriedades da classe pai
class ContaPF extends Conta {
}
class ContaPj extends Conta {
}

const conta1 = new ContaPF(123456789, "Cristina");
const conta2 = new ContaPj(112233440, "Santos");
console.log(conta1.titular)
console.log(conta2.titular)