//Importando todos... Todos que forem importados precisam ter 'export' em suas declarações
//Crio um index para que todas as importações peguem as exportações desses arquivos index
import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from '../models/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoParcial } from '../models/NegociacaoParcial';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

export class NegociacaoController {

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
    private _service = new NegociacaoService();

    //Fazendo CAST do tipo <HTMLInputElement> ->> Estou dando ctz que será retornado valores de input, não de TAG's
    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona() {
        //Date aceita uma string com '2019,04,07' porém está vindo com '2019-04-07'
        //Por isso é feito o replace, de - para ,
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        //Se for VERDADE é pq NÃO é dia da semana, por isso usamos o '!'
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()), //Converto para INT
            parseFloat(this._inputValor.val()) //Converto para FLOAT
        );

        this._negociacoes.adiciona(negociacao);

        //Posso um VARARGS de argumentos para essa função... Ela recebe um VARARGS (em JS é um ARRAY) e chama o método 'paraTexto' da sua classe respectiva
        imprime(negociacao, this._negociacoes);//POLIMORFISMO nesse método, aparece os métodos da interface 'IMPRIMIVEL'

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação cadastrada com sucesso!');
    }

    @throttle()
    async importaDados() {

        try {

           // usou await antes da chamada de this.service.obterNegociacoes()
            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {
                    if(res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                });

            //Só será executado qnd minha PROMISE for cumprida, usando o Asynx/Wait ele nos dá essa forma diferente de esperar a resposta
            //Parece Sincrona mas está sendo assincrona
            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);

        } catch(err) {
            this._mensagemView.update(err.message);
        }
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
