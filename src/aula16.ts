class Computador{
    //um parametro é como se fosse uma variavel
    //nome é parametro, só funciona dentro dessa classe
    nome:string="Computador 1";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;
}

//criar objetos da classe computador
const comp1 = new Computador();
const comp2 = new Computador();
const comp3 = new Computador();

comp1.nome="Laptop";
comp2.nome="Desktop";
comp3.nome="Gamer";

console.log(comp1.nome)