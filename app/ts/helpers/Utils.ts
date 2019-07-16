import { Imprimivel } from "../models/index";

//Usamos POLIMORFISMO -> Interface Imprimivel é implementada por algumas classes, como Negociacao e Negociacoes
//Essas classes sobrescrevem os métodos paraTexto, portanto ao acessos o obj nós exergarmos esses métodos
export function imprime(...objetos: Imprimivel[]) {
    objetos.forEach(obj => obj.paraTexto);
}
