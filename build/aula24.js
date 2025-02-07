"use strict";
class Contax {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        console.log(`Saldo insuficiente`);
    }
}
class ContaxPF extends Contax {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo...: Pessoa Física`);
        super.info();
        console.log(`CPF...: ${this.cpf}`);
        console.log(`-------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de deposito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaxPJ extends Contax {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo...: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log(`-------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de deposito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
}
const contax1 = new ContaxPF(111, "Cristina");
const contax2 = new ContaxPJ(222333, "Nicolau");
contax1.deposito(800);
contax1.deposito(200);
contax1.deposito(1000);
console.log(contax1.saldo());
contax2.deposito(10000);
contax2.deposito(10000);
contax2.deposito(10001);
console.log(contax2.saldo());
