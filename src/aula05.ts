//let cursos:string[]=[]; definir var tipada como array de strings

let vteste:string|number;
// let vteste:any; recebe qualquer valor
vteste = "Andressa";
vteste = 123;

//se coloco string e number ele aceita e incorpora na tipagem do array
let cursos = ["Javascript", "Typescript", "C++", 123];
let valores = [10, 100, 2024];

cursos.push("Arduino");
cursos.push(1000);
valores.push(555);

console.log(cursos);
console.log(valores);
console.log(vteste);