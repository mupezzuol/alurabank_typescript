class View{

    //protected -> Somente membros da propria classe e seus filhos podem acessar
    protected _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

}