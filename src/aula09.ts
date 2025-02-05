/*
enum dias{
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}
*/

//ele inseri o valor numerico automaticamente na sequencia se eu nao o definir
enum dias{
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

//imprimi o valor do enum
console.log(dias.domingo);

//entende como chave tb
console.log(dias['domingo']);

//retorna a chave associada ao valor passado = 1 retorna domingo
//console.log(dias[1]);

const d = new Date();

//console.log(d.getDate()) //dia do mes
//console.log(d.getDay())  //dia da semana


//console.log(dias[d.getDay()])  //passo para o enum o dia da semana e ele retorna o nome do dia, envio numero e ele retorna que dia da semana é

enum cores {
    branco= "#fff",
    preto= "#000",
    vermelho= "#f00",
    verde= "#0f0",
    azul= "#0ff"
}

console.log(cores.branco);

//como indice
console.log(cores["branco"]);

//nao consigo utilizar o indice numerico pq ele é um enum textual
//console.log(cores["#fff"]); da erro

//defini um enum numerico, nao preciso definir o num, ele ja defini automaticamente na sequecia
/*
enum tipoUsuario{
    USER,
    ADMIN,
    SUPER
}
*/

//console.log(tipoUsuario.SUPER) //retorna 2

enum tipoUsuario{
    USER= 10,
    ADMIN = 100,
    SUPER = 1000
}

//posso definir o enum como um tipo

// só posso atribuir dados que tem no enum (10, 100, 1000)
//const tp:tipoUsuario = 500; // da erro pq nao tem o valor 500 no enum

const tp:tipoUsuario = 10
const tpU:tipoUsuario = tipoUsuario.USER;

console.log(tp);
console.log(tpU);

//quando criamos const é necessario sempre inserir um valor pra ela, se for let nao precisa