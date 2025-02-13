"use strict";
class ContaUsuario {
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
class ContaUsuarioX extends ContaUsuario {
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
class ContaUsuarioY extends ContaUsuario {
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
const contaUsuario1 = new ContaUsuarioX(111, "Cristina");
const contaUsuario2 = new ContaUsuarioY(222333, "Nicolau");
contaUsuario1.deposito(800);
contaUsuario1.deposito(200);
contaUsuario1.deposito(1000);
console.log(contaUsuario1.saldo);
