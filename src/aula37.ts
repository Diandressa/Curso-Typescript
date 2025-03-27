// Ir no arquivo Globais para ver as anotações

//Importar as globais
import { Globais } from "./Globais";

//não precisei instanciar a classe, pq é uma global const global=new Globais()

console.log(Globais.teste)

//atribuir valor para teste, qualquer outro arquivo que use globais agora terá o valor atribuido como 10
Globais.teste = 10
console.log(Globais.teste)