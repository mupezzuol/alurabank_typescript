import { Imprimivel, Igualavel } from '../models/index';

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T>{
   //Terá todos os métodos de IMPRIMIVEL E IGUALAVEL
}