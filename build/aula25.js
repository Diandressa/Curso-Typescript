"use strict";
class ContaUser {
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
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class ContaUserX extends ContaUser {
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
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaUserY extends ContaUser {
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
const contauser1 = new ContaUserX(111, "Cristina");
const contauser2 = new ContaUserY(222333, "Nicolau");
contauser1.deposito(800);
contauser1.deposito(200);
contauser1.deposito(1000);
contauser1.saque(1000);
contauser1.saque(1000);
contauser1.saque(10);
console.log(contauser1.saldo());
