"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro3 {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.ligaset = true;
        }
        desligar() {
            this.motor.ligaset = false;
        }
        get minhaCorget() {
            return this.cor;
        }
        get meuNomeget() {
            return this.nome;
        }
        get estouLigadoget() {
            return (this.motor.ligaget ? "Sim" : "Não");
        }
        get minhaPotenciaget() {
            return this.motor.potenciaget;
        }
    }
    class CarroEsportivo extends Carro3 {
        constructor(nome, cor) {
            super(nome, new Motores.Motor3(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro3 {
        constructor(nome, cor) {
            super(nome, new Motores.Motor3(3, 100), 0);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
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
    Motores.Turbo = Turbo;
    class Motor3 {
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
    Motores.Motor3 = Motor3;
})(Motores || (Motores = {}));
const carro2 = new Veiculos.CarroEsportivo("Ford Mustang", 2);
const carro3 = new Veiculos.CarroPopular("Corola", 0);
console.log(`Mome....: ${carro2.meuNomeget}`);
console.log(`Cor.....: ${carro2.minhaCorget}`);
console.log(`Potencia: ${carro2.minhaPotenciaget}`);
console.log(`Ligado..: ${carro2.estouLigadoget}`);
console.log("----------------------");
console.log(`Mome....: ${carro3.meuNomeget}`);
console.log(`Cor.....: ${carro3.minhaCorget}`);
console.log(`Potencia: ${carro3.minhaPotenciaget}`);
console.log(`Ligado..: ${carro3.estouLigadoget}`);
carro2.ligar();
carro3.ligar();
