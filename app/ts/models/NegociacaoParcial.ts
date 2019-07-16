//Criando uma interface para utilizar com API REST
// Exemplo -> Caso a API mude o nome dos campos, eu altero somente aqui e em todos os pontos da aplicação apontara o erro para ser alterado
export interface NegociacaoParcial{

    vezes: number,
    montante: number;

}