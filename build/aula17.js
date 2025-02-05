"use strict";
class Computadorr {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log(`Novo computador criado: nome ${nome}, ram ${ram} e cpu ${cpu}`);
    }
}
const compp1 = new Computadorr("Laptop", 64, 10);
const compp2 = new Computadorr("Desktop", 32, 5);
const compp3 = new Computadorr("Gamer", 128, 10);
