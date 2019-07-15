class NegociacaoController {
    //Fazendo CAST do tipo <HTMLInputElement> ->> Estou dando ctz que será retornado valores de input, não de TAG's
    constructor() {
        this._inputData = document.querySelector('#data'); //id do input no formulário
        this._inputQuantidade = document.querySelector('#quantidade'); //id do input no formulário
        this._inputValor = document.querySelector('#valor'); //id do input no formulário
    }
    adiciona(event) {
        event.preventDefault(); //Não atualizar a página depois de submeter o formulário
        const negociacao = new Negociacao(
        //Date aceita uma string com '2019,04,07' porém está vindo com '2019-04-07'
        //Por isso é feito o replace, de - para ,
        new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), //Converto para INT
        parseFloat(this._inputValor.value) //Converto para FLOAT
        );
        console.log(negociacao);
    }
}
