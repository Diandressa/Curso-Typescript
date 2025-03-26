"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cont {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
        console.log(`-------------`);
    }
}
class ContPF extends Cont {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${titular}`);
    }
}
class ContPJ extends Cont {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${titular}`);
    }
}
const cont1 = new ContPF(111, "Cristina");
const cont2 = new ContPJ(222333, "Nicolau");
