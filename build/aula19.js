"use strict";
class Computa {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
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
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde} para computador ${this.nome} não é permitido`);
        }
    }
}
const co1 = new Computa("Laptop", 64, 10);
const co2 = new Computa("Desktop", 32, 5);
const co3 = new Computa("Gamer", 128, 10);
co1.ligar();
co3.desligar();
co1.nome = "Notbook";
co1.upRam(-100);
co1.info();
co2.info();
co3.info();
