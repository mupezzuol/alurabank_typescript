class Negociacoes{

    //Informando qual é o tipo do Array ->> Array<Negociacao> = []; ou da forma como está abaixo
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{
        return this._negociacoes;
    }



}