/*
let dados:object={ 
    //nome:string="Andressa"
    //no objetc nao precisa declarar o tipo, o tipo é definido pelo valor
    nome:"Andressa",
    idade: 28,
    status: "ativo"
}
*/

//ele entende pela estrutura que é o tipo object
let dados={ 
    nome:"Andressa",
    idade: 28,
    status: "ativo",
    ola:()=>{console.log("Olá")}, //criar funcao dentro do objeto
    info:(p:string)=>{console.log(p)} //especificar o tipo do parametro
}

//mudar o valor de um atributo
dados.nome = "Nicolau";

dados.ola();
dados.info(dados.nome); //passa o parametro pra funcao info do objeto

console.log(typeof(dados));

//acessar um atributo do objeto
console.log(dados.nome)