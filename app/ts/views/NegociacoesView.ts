//Importando dependencia da Classe 'View'
import { View } from './View';
import { Negociacoes } from '../models/index';

//Passo o tipo que eu quero que seja herdado em 'View'
export class NegociacoesView extends View<Negociacoes>{

    //Passando a lista de Negociacoes eu consigo fazer um 'map' para concatenar os resultados na tela
    template(model: Negociacoes): string {
        return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
    
                    <tbody>
                        ${model.paraArray().map(negociacao =>
            `
                                <tr>
                                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>
                            `).join('')}
                    </tbody>
    
                    <tfoot>
                    </tfoot>
                </table>  
            `
    }
}


