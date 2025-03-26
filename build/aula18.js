"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computado {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const com1 = new Computado("Laptop", 64, 10);
const com2 = new Computado("Desktop", 32, 5);
const com3 = new Computado("Gamer", 128, 10);
com1.ligar();
com3.ligar();
com1.desligar();
com1.info();
com2.info();
com3.info();
