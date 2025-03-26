"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contaa {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
}
class ContaaPF extends Contaa {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaaPJ extends Contaa {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const contaa1 = new ContaaPF(111, "Cristina");
const contaa2 = new ContaaPJ(222333, "Nicolau");
console.log(contaa1.titular);
console.log(contaa1.numero);
console.log(contaa2.titular);
console.log(contaa2.numero);
