class NegociacaoController{

    private _inputData;
    private _inputQuantidade;
    private _inputValor;


    constructor(){
        this._inputData = document.querySelector('#data');//id do input no formulário
        this._inputQuantidade = document.querySelector('#quantidade');//id do input no formulário
        this._inputValor = document.querySelector('#valor');//id do input no formulário
    }


    adiciona(event){
        event.preventDefault();//Não atualizar a página depois de submeter o formulário

        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }


}