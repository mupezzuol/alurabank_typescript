//T é tipo Genérico, na hora de herdar podemos passar qualquer tipo... Array, String, Object etc...
//Todos os lugares que tiverem T seráo trocados pelo modelo colocado na hora de herdar
class View<T> {

    //protected -> Somente membros da propria classe e seus filhos podem acessar
    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: T) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        //Se não for sobrescrito será lançado uma Exception
        throw new Error('Você deve implementar o método template');
    }

}