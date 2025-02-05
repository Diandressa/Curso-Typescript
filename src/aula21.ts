//Classe pai
class Contaa {
    public numero:number
    public titular:string

    //retiro number do constructor pq ele sera gerado automaticamente pela funcao gerarNumeroConta():number{
    constructor(titular:string){
        //mando o numero gerado pela funcao para a varivel numero com this, funcao dessa classe
        this.numero = this.gerarNumeroConta();
        this.titular = titular
    }

    gerarNumeroConta():number{
        //gerar numero aleatório +1 (para não ser zero) e.floor para retornar numero inteiro
        return Math.floor(Math.random()*100000)+1;
    }
}

//Classe filha, herda as propriedades da classe pai
class ContaaPF extends Contaa {
    cpf:number
    //se passo só o cpf:number ele não entende pois na classe pai pede o numero e o titular
    //por isso passamos todos as variaveis mais a varivel nova adicionada, precisamos enviar essas variaveis para classe pai

    //retiro numero:number pq agora ele é gerado na classe pai no construtor, chamando a funcao de gerar
    constructor (cpf:number, titular:string){
        //para passar algo para a classe pai, chamamos a classe pai com o super
        //super invoca a classe pai
        //passamos as variaveis numero e titular que é as que a classe pai espera no construtor
        super(titular)
        //enviamos o numero e titular para classe ContaaPF e esses valores com o super vão para classe pai Contaa, para o constructor
        this.cpf = cpf
    }
}
class ContaaPJ extends Contaa {
    //se não uso constructor na classe filho ele automaticamente usa o constructor da classe pai
    cnpj:number

    constructor(cnpj:number, titular:string){
        super(titular)
        this.cnpj = cnpj
    }
}

//passamos todos os dados para o constructor da classe filha, a classe filha chama o constructor da classe pai passando todos os dados da filha ContaaPF para a classe pai Contaa
const contaa1 = new ContaaPF(111, "Cristina");
const contaa2 = new ContaaPJ(222333, "Nicolau");

console.log(contaa1.titular)
console.log(contaa1.numero)

console.log(contaa2.titular)
console.log(contaa2.numero)