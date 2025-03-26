"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro2 {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor2(100, 3);
        }
    }
    Veiculos.Carro2 = Carro2;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
        get potenciaget() {
            return this.potencia;
        }
    }
    class Motor2 {
        ligado;
        cilindros;
        potencia;
        constructor(cilindros, potencia, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.potenciaget : 0);
        }
        set ligaset(ligado) {
            this.ligado = ligado;
        }
        get ligaget() {
            return this.ligado;
        }
        get potenciaget() {
            return this.potencia;
        }
        get cilindrosget() {
            return this.cilindros;
        }
    }
    Motores.Motor2 = Motor2;
})(Motores || (Motores = {}));
