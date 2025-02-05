"use strict";
let dados = {
    nome: "Andressa",
    idade: 28,
    status: "ativo",
    ola: () => { console.log("Olá"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Nicolau";
dados.ola();
dados.info(dados.nome);
console.log(typeof (dados));
console.log(dados.nome);
