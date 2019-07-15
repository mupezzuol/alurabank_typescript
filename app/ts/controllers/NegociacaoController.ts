class NegociacaoController{

    //Quando vem do HTML/FORM é um Element o tipo que retorna, porém temos que especificar para acessar métodos mais especificos
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes(); //Não preciso passar o tipo, pq ele adc o tipo de acordo com o tipo do que eu estou atribuindo para ele.. ou seja 'Negociacoes'


    //Fazendo CAST do tipo <HTMLInputElement> ->> Estou dando ctz que será retornado valores de input, não de TAG's
    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector('#data');//id do input no formulário
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');//id do input no formulário
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');//id do input no formulário
    }


    adiciona(event: Event){
        event.preventDefault();//Não atualizar a página depois de submeter o formulário
        
        const negociacao = new Negociacao(
            //Date aceita uma string com '2019,04,07' porém está vindo com '2019-04-07'
            //Por isso é feito o replace, de - para ,
            new Date(this._inputData.value.replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.value), //Converto para INT
            parseFloat(this._inputValor.value) //Converto para FLOAT
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.adiciona(negociacao);

        //paraArray retorna um ARRAY de Negociacao, portanto consigo utilizar o nosso forEach
        this._negociacoes.paraArray().forEach(n => {
            //n -> Negociacao
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
        });

    }


}