"use strict";
class Computador {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();
comp1.nome = "Laptop";
comp2.nome = "Desktop";
comp3.nome = "Gamer";
console.log(comp1.nome);
