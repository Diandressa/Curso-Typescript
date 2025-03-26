// Namespace - Agrupa/organiza elementos de tipos específicos dentro de um espaço específico


namespace Veiculos{
    //restringir quais cores podem ter meus carros
    enum Cores{"Preto", "Branco", "Vermelho", "Amarelo", "Azul", "Prata"}

    //abstract significa que não podemos instanciar essa classe, ele serve para outras classes herdarem dela, não preciso export porque não vou usar fora da classe
    abstract class Carro3{
        private nome:string
        //criar uma var puxando a outra namespace, depois puxa a classe Motor (o tipo dela é Motor)
        private motor:Motores.Motor3
        private cor:String 

        constructor(nome:string, motor:Motores.Motor3, cor:Cores){
            this.nome = nome
            //passar a potencia e os cilindros esperada na classe Motor, retorna um objeto no console log
            //this.motor= new Motores.Motor3(100,3)
            //this.motor = motor:Motores.Motor3 acessa a classe Motor3
            this.motor= motor
            //vai receber o índice, que é cor, e acessar o array Cores nesse índice, ai retorna o nome da cor como string depois de passado um number(índice)
            this.cor = Cores[cor]
        }

        public ligar(){
            this.motor.ligaset=true
        }
        public desligar(){
            this.motor.ligaset=false
        }
        get minhaCorget(){
            //recebe o nome da cor do constructor
            return this.cor
        }
        get meuNomeget(){
            return this.nome
        }
        get estouLigadoget(){
            return (this.motor.ligaget?"Sim":"Não")
        }
        get minhaPotenciaget(){
            return this.motor.potenciaget
        }
    }

    //Criar uma classe para herdar de Carro3, preciso dar o export para usar fora no namespace
    export class CarroEsportivo extends Carro3{
        constructor(nome:string, cor:Cores){
            //super mando os parâmetro para classe abstrata
            //instanciamos um motor e um turbo(turbo opcional)
            super(nome, new Motores.Motor3(6,300, new Motores.Turbo(100)), 2)
        }
    }

    export class CarroPopular extends Carro3{
        constructor(nome:string, cor:Cores){
            //super mando os parâmetro para classe abstrata
            //instanciamos um motor e um turbo(turbo opcional)
            super(nome, new Motores.Motor3(3,100), 0)
        }
    }

}

namespace Motores{
    
    export class Turbo{
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
    
    export class Motor3{
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

//const carro2=new Carro - não posso instanciar uma classe abstrata

//com as classes criadas, herdadas do abstract, podemos instanciar os objetos
const carro2 = new Veiculos.CarroEsportivo("Ford Mustang", 2)
const carro3 = new Veiculos.CarroPopular("Corola", 0)

carro2.ligar()
carro3.ligar()

console.log(`Mome....: ${carro2.meuNomeget}`)
console.log(`Cor.....: ${carro2.minhaCorget}`)
console.log(`Potencia: ${carro2.minhaPotenciaget}`)
console.log(`Ligado..: ${carro2.estouLigadoget}`)
console.log("----------------------")
console.log(`Mome....: ${carro3.meuNomeget}`)
console.log(`Cor.....: ${carro3.minhaCorget}`)
console.log(`Potencia: ${carro3.minhaPotenciaget}`)
console.log(`Ligado..: ${carro3.estouLigadoget}`)




