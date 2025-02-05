//posso usar quando nao quiser declarar uma funcao

//arrowfunction nao eleva a funçao, o function eleva (elevar é como deixar a funcao no topo do arquivo, posso chamar a function antes dela ser criada)

/*
teste();
function teste():void{
    console.log('Teste');
}
*/

//tenho que chamar a funcao depois dela ser criada
/*
//parametro default sendo ...
const teste2 =(txt:string='...'):void => {
    console.log(txt)
}
*/
/*
// ? diz que o parametro é opcional e o valor vem como undefined
const teste2 =(txt?:string):void => {
    console.log(txt)
}

teste2('CFB Cursos');
teste2('Curso de Typescript');
teste2();
*/
/*
const fsoma = (n1:number, n2:number):number => {
    return n1 + n2
}

console.log(fsoma(90,10))
*/
//arrow function ou funcao anonima sempre vai ser associada a uma variavel ou uma constante

//especificar um array

const fsoma2 = (n:number[]):number => {
    let s:number=0;
    //soma dos valores passados no array, para percorrer o array preciso de um forEach

    n.forEach((e)=>{
        //s = s + e;
        s += e;
    })

    return s;
}

let numer:number[]=[10,20,30,40,50];

console.log(fsoma2(numer))
