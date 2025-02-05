//ao negar o valor definido a funcao assume o valor padrão

function soma(n1:number=0, n2:number=0):number{
    return n1+n2;
}

//por padrão vai pegar os valores nao passados e vai definir o valor padrão definido na função como zero
//5 vai ser o n1- na ordem
console.log(soma(5));

//tornar um parametro opcional com ?, posso enviar ele ou nao, mas ele nao tem um valor padrao

function novoUser(user:string, pass:string, nome?:string):void{
    let dados = {user, pass,nome};
    console.log(dados);

    /*
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
    */
}

//se eu nao mando o nome, no indice 2, ele da nome como sendo undefined
novoUser('br', '123');