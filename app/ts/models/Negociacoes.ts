class Negociacoes{

    //Informando qual é o tipo do Array ->> Array<Negociacao> = []; ou da forma como está abaixo
    private _negociacoes: Negociacao[] = [];

    
    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }


    //Tipando o retorno do método é uma boa prática, conseguimos capturar vários erros e manter segurança no uso dos métodos
    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);//Retorno uma cópia da instancia, para que ninguém possa alterar o valor o Array
    }



}