//Precisamos especificar o tipo nos parâmetros da função e no retorno

//quando a função não retorna nada ela é do tipo void, se eu nao coloco nada automaticamente é entendida como tipo void, mas o indicado é especificar 
/*
function teste():void{
    console.log("teste");
}

teste();
*/

/*
function logar(user:string, pass:string):void{
    console.log(`User: ${user}`)
    console.log(`Senha: ${pass}`)
}

logar("Andressa", "123");
logar("Teste", "0000");
*/

//função que retorna valor

//função não retorna mais void(vazio), retorna number. Ela espera um return agora
/*
function soma2(n1:number, n2:number):number{

    return n1+n2;
}
*/

function soma2(n1:number, n2:number):number{
    let r= n1+n2;
    return r;
}

//Podemos imprimir o retorno da função ao chamar ela
//console.log(soma2(10,5))

//atribuimos o retorno da funcao para uma variavel, automaticamente o res foi definido como um tipo number pq o retorno de soma2 é tipo number


//podemos definir o res como mumber tb, nao vai alterar nada, mas torna o codigo mais organizado
let n_res:number = soma2(10,15);
console.log(n_res);

//converter o retorno number da funcao para tipo string
let s_res:string= soma2(2,8).toString();
console.log(s_res);
console.log(typeof(s_res));