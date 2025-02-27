"use strict";
class Conta2 {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
        this.numero = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class Conta2PF extends Conta2 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    taxaCalculo = 10;
    CalcularTrib(valor) {
        return valor * this.taxaCalculo;
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
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class Conta2PJ extends Conta2 {
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
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const conta2pf = new Conta2PF(111, "Cristina");
const conta2pj = new Conta2PJ(222333, "Nicolau");
conta2pf.deposito(800);
conta2pj.deposito(200);
conta2pj.deposito(1000);
console.log(conta2pj.saldo);
conta2pf.info();
