"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPj extends Conta {
}
const conta1 = new ContaPF(123456789, "Cristina");
const conta2 = new ContaPj(112233440, "Santos");
console.log(conta1.titular);
console.log(conta2.titular);
