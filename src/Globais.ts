//Em programação orientada a objetos o static serve para criar membros estáticos: propriedades ou métodos
// Propriedades ou métodos estáticos são membros associados a classe e não a instância
// Tem um membro comum à todas as classes independente do que vamos instanciar
// Exemplo: Tenho um propriedade static. Instancio vários objetos. Em um desses objetos mudo o valor da propriedade static. Esse valor passa a valer para todos os objetos
// Os membros estático sempre apontam, são armazenados, no mesmo endereço de memória
// Com isso temos dados globais para todo o sistema 

//Criamos os dados que serão globais para toda a aplicação
//quando tenho membros static eu não preciso instanciar a classe para acessar os membros
//como não irá ser instanciado posso declarar como abstract, para não ser instanciado

export abstract class Globais{
    //tem que ser public pq precisamos acessar esses membros de qualquer lugar, depois declaramos como static
    //teste inicia com valor 0
    public static teste:number = 0
    //um array vazio
    public static arrayTeste:number[] = []
    //um objeto
    public static objeto={
        nome:"Bruno",
        canal:"CFBCursos"
    }

    //posso definir static para variáveis ou para métodos
    //não tem um constructor
}