class MensagemView{

    private _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }


    update(model: string): void{
        this._elemento.innerHTML = this.template(model);
    }


    template(model: string): string{
        //Monta o Elemento com a mensagem passada
        return `<p class="alert alert-info">${model}</p>`;
    }


}