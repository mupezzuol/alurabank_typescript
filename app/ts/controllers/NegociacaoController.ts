class NegociacaoController{

    //Quando vem do HTML/FORM é um Element o tipo que retorna, porém temos que especificar para acessar métodos mais especificos
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes(); //Não preciso passar o tipo, pq ele adc o tipo de acordo com o tipo do que eu estou atribuindo para ele.. ou seja 'Negociacoes'
    private _negociacoesView = new Views.NegociacoesView('#negociacoesView');
    private _mensagemView = new Views.MensagemView('#mensagemView');

    //Fazendo CAST do tipo <HTMLInputElement> ->> Estou dando ctz que será retornado valores de input, não de TAG's
    constructor(){
        this._inputData = $('#data');//id do input no formulário
        this._inputQuantidade = $('#quantidade');//id do input no formulário
        this._inputValor = $('#valor');//id do input no formulário
        this._negociacoesView.update(this._negociacoes);
    }


    adiciona(event: Event){
        event.preventDefault();//Não atualizar a página depois de submeter o formulário
        
        const negociacao = new Negociacao(
            //Date aceita uma string com '2019,04,07' porém está vindo com '2019-04-07'
            //Por isso é feito o replace, de - para ,
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()), //Converto para INT
            parseFloat(this._inputValor.val()) //Converto para FLOAT
        );

        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação cadastrada com sucesso!');
    }


}