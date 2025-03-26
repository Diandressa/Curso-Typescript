// Módulos - Criar conteúdo em arquivos separados
// Preciso importar o arquivo que desejo usar aqui

//exportar um elemento padrão -> fica fora da chaves e separado por vírgula
import Pessoa, { Objeto, Coisas } from "./classe-aula31"

//Podemos importar o default separado também
/*
import Pessoa from "./classe-aula31"
import { Objeto, Coisas } from "./classe-aula31"
*/


const p1 = new Pessoa("Bruno", 1.65)
const o1 = new Objeto("Mesa")

console.log(Coisas)

