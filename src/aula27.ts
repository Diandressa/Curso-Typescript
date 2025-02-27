//Objeto literal declarado
/*let curso1:{
    titulo:string;
    des:string;
    aula:number;
    maxAlunos:number;
}

let curso2:{
    titulo:string;
    des:string;
    aula:number;
    maxAlunos:number;
}*/

//podemos usar interface para definir um tipo geral que serao usadas nos objetos
interface curso{
    titulo:string;
    des:string;
    aula:number;
    //maxAlunos:number;
    //para torna o parametro opcional usamos o ? 
    maxAlunos?:number
}

//agora posso criar elementos do tipo curso, criamos um novo tipo chamado curso usando interface

let curso1:curso;
let curso2:curso;
let curso3:curso;

curso1={titulo:"Typescript", des:"Curso de Typescript", aula: 100, maxAlunos: 50}
curso2={titulo:"Javascript", des:"Curso de Javascript", aula: 200, maxAlunos: 80}

//tenho que passar todos os dados, se deixar de passar algum da erro
//curso3={titulo:"C++", des:"Curso de C++", aula: 200}

//curso3={titulo:"C++", des:"Curso de C++", aula: 200, maxAlunos: 100}

//para torna o parametro opcional usamos o ? 
//agora podemos nao passar o parametro que é opcional
curso3={titulo:"C++", des:"Curso de C++", aula: 200}

console.log(curso1, curso2, curso3)