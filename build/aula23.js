"use strict";
class Con {
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
class ConPF extends Con {
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
class ConPJ extends Con {
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
const con1 = new ConPF(111, "Cristina");
const con2 = new ConPJ(222333, "Nicolau");
con1.deposito(800);
con1.deposito(200);
con1.deposito(1000);
console.log(con1.saldo());
con2.deposito(10000);
con2.deposito(10000);
con2.deposito(10001);
console.log(con2.saldo());
