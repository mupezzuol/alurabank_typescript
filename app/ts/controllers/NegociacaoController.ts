//Importando todos... Todos que forem importados precisam ter 'export' em suas declarações
//Crio um index para que todas as importações peguem as exportações desses arquivos index
import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { domInject } from '../helpers/decorators/index';

export class NegociacaoController{

    //DOM Injector com Lazy Loanding para carregar os valores dos inputs quando forem acessados
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#data')
    private _inputQuantidade: JQuery;

    @domInject('#data')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes(); //Não preciso passar o tipo, pq ele adc o tipo de acordo com o tipo do que eu estou atribuindo para ele.. ou seja 'Negociacoes'
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    //Fazendo CAST do tipo <HTMLInputElement> ->> Estou dando ctz que será retornado valores de input, não de TAG's
    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao(true)
    adiciona(event: Event){
        event.preventDefault();//Não atualizar a página depois de submeter o formulário
        
        //Date aceita uma string com '2019,04,07' porém está vindo com '2019-04-07'
            //Por isso é feito o replace, de - para ,
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        //Se for VERDADE é pq NÃO é dia da semana, por isso usamos o '!'
        if(!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()), //Converto para INT
            parseFloat(this._inputValor.val()) //Converto para FLOAT
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação cadastrada com sucesso!');
    }


    //Se a data NÃO FOR IGUAL a Sábado nem Domingo ele retorna TRUE
    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }


}

//Em ordem começando do 0.... (mantive a ordem pois em JS essa é a ordem para validar os dias da semana)
//Posso atribuir os valores caso eu queira
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}