class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        //Monta o Elemento com a mensagem passada
        return `<p class="alert alert-info">${model}</p>`;
    }
}
