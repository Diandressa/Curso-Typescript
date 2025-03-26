// Módulos - Criar conteúdo em arquivos separados
// Preciso importar o arquivo que desejo usar aqui
import { Pessoa, Objeto } from "./classe-aula30"
//Quando vem do mesmo arquivo posso exportar em um único import
//import { Objeto } from "./classe-aula30e31"

const p1 = new Pessoa("Bruno", 1.65)
const o1 = new Objeto("Mesa")

console.log(p1.nome)
console.log(p1.altura)
console.log(o1.nome)

