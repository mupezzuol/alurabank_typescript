class MensagemView extends View{

    update(model: string): void{
        this._elemento.innerHTML = this.template(model);
    }


    template(model: string): string{
        //Monta o Elemento com a mensagem passada
        return `<p class="alert alert-info">${model}</p>`;
    }


}