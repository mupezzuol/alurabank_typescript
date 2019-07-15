//T é tipo Genérico, na hora de herdar podemos passar qualquer tipo... Array, String, Object etc...
//Todos os lugares que tiverem T seráo trocados pelo modelo colocado na hora de herdar
//Criamos uma classe abstract, ou seja, não podemos criar uma instancia dela ->>> view = new View('teste');
abstract class View<T> {

    //protected -> Somente membros da propria classe e seus filhos podem acessar
    private _elemento: JQuery;//Precisa ser qualquer coisa para aceitar o jQuery

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(model: T) {
        this._elemento.html(this.template(model));
    }

    //Método Abstrato -> Quem herdar essa classe DEVERÁ OBRIGATORIAMENTE implementar esse método
    abstract template(model: T): string;

}