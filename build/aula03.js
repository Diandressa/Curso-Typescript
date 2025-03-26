"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curso {
    curso = null;
    canal = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso('CFBCursos', 'Typescript');
console.log(c1.canal);
console.log(c1.curso);
