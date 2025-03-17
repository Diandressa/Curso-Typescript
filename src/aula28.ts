//Objeto literal com função e herança

//podemos usar interface para definir um tipo geral que serao usadas nos objetos
interface curso{
    titulo:string;
    des:string;
    aula:number;
    //para torna o parametro opcional usamos o ? 
    maxAlunos?:number;
    //definir a função e o tipo que é o void, o retorno dela
    //posso passar um parametro e o tipo dele (teste:string)
    iniciarCurso?(text: string):void;
}

//agora posso criar elementos do tipo curso, criamos um novo tipo chamado curso usando interface

//criar uma funcao padrao pra ser usado em outros objetos/ herdado em outros objetos
//extendemos do objeto pai
interface cursoProg extends curso{
    aula:number;
    maxAlunos?:number;
}

interface cursoArtes extends curso{
    aula:number;
    maxAlunos?:number;
}

//Curso do tipo espeficiado
let curso01:cursoProg;
let curso02:cursoProg;
let curso03:cursoArtes;

//preciso chamar a função aqui e passar o parametro com seu tipo e a ação dentro das chaves
curso01= {
    titulo:"Typescript", 
    des:"Curso de Typescript", 
    aula: 100, 
    maxAlunos: 50, 

    iniciarCurso(text:string){
        console.log(text);
    }
}
//defino titulo e descrição que extendem do objeto pai curso e depois coloco os paramentros definidos nesse tipo filho
//O ?. verifica se iniciarCurso não é undefined e, se não for, chama a função com o parâmetro "Curso iniciado". Caso contrário, não faz nada.
curso01.iniciarCurso?.("Curso iniciado");


curso02={titulo:"Javascript", des:"Curso de Javascript", aula: 200, maxAlunos: 80}


//para torna o parametro opcional usamos o ? 
//agora podemos nao passar o parametro que é opcional
curso03={titulo:"C++", des:"Curso de C++", aula: 200}

//console.log(curso01)

//podemos usar isso em classes - ir na aula 26