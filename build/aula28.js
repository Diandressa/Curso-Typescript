"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let curso01;
let curso02;
let curso03;
curso01 = {
    titulo: "Typescript",
    des: "Curso de Typescript",
    aula: 100,
    maxAlunos: 50,
    iniciarCurso(text) {
        console.log(text);
    }
};
curso01.iniciarCurso?.("Curso iniciado");
curso02 = { titulo: "Javascript", des: "Curso de Javascript", aula: 200, maxAlunos: 80 };
curso03 = { titulo: "C++", des: "Curso de C++", aula: 200 };
