"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    cor1: "Verde",
    cor2: "Amarelo",
    cor3: "Azul",
    cor4: "Branco"
};
let { cor1, cor2, cor3, cor4 } = obj;
let [num1, num2 = 0, ...num3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(num1);
console.log(num2);
console.log(num3);
const cores = () => {
    return ["Verde", "Amarelo", "Azul", "Branco"];
};
let [c1, c2, c3, c4] = cores();
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);
let texto = "Curso de Typescript";
let [p1, p2, p3] = texto.split(" ");
console.log(p1);
console.log(p2);
console.log(p3);
