//T é tipo Genérico, na hora de herdar podemos passar qualquer tipo... Array, String, Object etc...
//Todos os lugares que tiverem T seráo trocados pelo modelo colocado na hora de herdar
//Criamos uma classe abstract, ou seja, não podemos criar uma instancia dela ->>> view = new View('teste');

//Usando namespace para facilitar a utilização na hora de criar instancias
//Eu chamo os EXPORT que está dentro de VIEWS

import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    //protected -> Somente membros da propria classe e seus filhos podem acessar
    private _elemento: JQuery;//Precisa ser qualquer coisa para aceitar o jQuery
    private _escapar: boolean;

    //Parametro com '?' é opcional na chamada do construtor e se usado deve ser os últimos na assinatura do método
    constructor(seletor: string, escapar: boolean = false) {
        this._elemento = $(seletor);
        this._escapar = escapar;//Seto como padrão 'false' pois estamos usando o 'strictNullChecks' para validar null e undefined
    }

    @logarTempoDeExecucao(true)
    update(model: T) {
        let template = this.template(model);

        if (this._escapar){
            //Retira códigos que tem tag 'script' em nosso template
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this._elemento.html(template);
    }

    //Método Abstrato -> Quem herdar essa classe DEVERÁ OBRIGATORIAMENTE implementar esse método
    abstract template(model: T): string;
}


