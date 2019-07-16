import { Imprimivel } from './index';

export class Negociacao extends Imprimivel{
    /*
    private _data: Date;
    private _quantidade: number; //number é INT e FLOAT/DOUBLE
    private _valor: number;
    constructor(data: Date, quantidade: number,  valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }*/


    //TS -> Forma simplificada de criar ATRIBUTOS + CONSTRUCTOR
    constructor(readonly data: Date, readonly quantidade: number,  readonly valor: number){
        super();//Construtor da SUPER
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        );
    }
    
}