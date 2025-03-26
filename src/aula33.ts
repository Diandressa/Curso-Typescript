// Namespace - Agrupa/organiza elementos de tipos específicos dentro de um espaço específico

// Criar uma estrutura para coisas relacionada ao Carro
namespace Veiculos{
    //Precismos colocar export para usar a classe fora do namespace
    export class Carro2{
        nome:string

        //criar uma var puxando a outra namespace, depois puxa a classe Motor (o tipo dela é Motor)
        motor:Motores.Motor2

        constructor(nome:string){
            this.nome = nome
            //passar a potencia e os cilindros esperada na classe Motor, retorna um objeto no console log
            this.motor= new Motores.Motor2(100,3)
        }
    }
}

namespace Motores{
    
    class Turbo{
        //potencia só pode ser usado pela classe Turbo, pq é privada
        private potencia:number

        constructor(potencia:number){
            this.potencia = potencia
        }

        //usamos o metodo get para obter a potencia privada. Ela não pode alterar, só obter o retorno
        get potenciaget(){
            return this.potencia
        }
    }
    
    export class Motor2{
        private ligado:boolean
        private cilindros:number
        private potencia:number
        
        //Criar um elemento do tipo Turbo
        constructor(cilindros:number, potencia:number, turbo?:Turbo){
            //o parâmetro turbo é opcional
            //não preciso passar como parâmetro para o constructor, pq quero que seja false por padrão
            this.ligado = false
            this.cilindros = cilindros
            //quando tiver Turbo eu vou somar com a potência
            //Condicional, se tem turbo soma, se nao retorna zero
            this.potencia = potencia + (turbo?turbo.potenciaget:0)
        }

        //opção de ligar o motor, se passar false ou true ele substitui o valor passado
        set ligaset(ligado:boolean){
            this.ligado=ligado
        }
        //obter se o motor está ligado ou desligado, get não recebe parâmetro, só retorna a variável
        get ligaget(){
            return this.ligado
        }

        //obter a potência do motor
        get potenciaget(){
            return this.potencia
        }
        //obter número de cilindros
        get cilindrosget(){
            return this.cilindros
        }
    }
}

//Instanciar um carro, precisamos passar pelo namespace agora


