import { Negociacao, MeuObjeto } from '../models/index';

export class Negociacoes implements MeuObjeto<Negociacoes>{

    //Informando qual é o tipo do Array ->> Array<Negociacao> = []; ou da forma como está abaixo
    private _negociacoes: Negociacao[] = [];

    
    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }


    //Tipando o retorno do método é uma boa prática, conseguimos capturar vários erros e manter segurança no uso dos métodos
    paraArray(): Negociacao[]{
        //Usando 'as Negociacao[]' por conta da config de 'strictNullChecks' para validar null e undefined
        return ([] as Negociacao[]).concat(this._negociacoes);//Retorno uma cópia da instancia, para que ninguém possa alterar o valor o Array
    }

    paraTexto(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes);
    }


}