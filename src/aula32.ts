// Namespace - Agrupa/organiza elementos de tipos específicos dentro de um espaço específico

// Criar uma estrutura para coisas relacionada ao Carro
namespace Veiculos{
    //Precismos colocar export para usar a classe fora do namespace
    export class Carro{
        nome:string

        //criar uma var puxando a outra namespace, depois puxa a classe Motor (o tipo dela é Motor)
        motor:Motores.Motor

        constructor(nome:string){
            this.nome = nome
            //passar a potencia esperada na classe Motor, retorna um objeto no console log
            this.motor= new Motores.Motor(100)
        }
    }
}


// Criar uma estrutura para coisas relacionada ao Motor

namespace Motores{
    //Classe usada somente dentro dessa namespace
    class Turbo{
        potencia:number
        constructor(potencia:number){
            this.potencia = potencia
        }
    }
    export class Motor{
        potencia:number
        //Criar um elemento do tipo Turbo
        constructor(potencia:number){
            this.potencia = potencia
        }
    }
}

//Instanciar um carro, precisamos passar pelo namespace agora

//const c1 = new Carro("Corola")
const carro1 = new Veiculos.Carro("Corola")
console.log(carro1.nome)
console.log(carro1.motor)

