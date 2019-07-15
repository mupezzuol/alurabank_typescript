//Passo o tipo que eu quero que seja herdado em 'View'
class NegociacoesView extends View {
    //Passando a lista de Negociacoes eu consigo fazer um 'map' para concatenar os resultados na tela
    template(model) {
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
                    ${model.paraArray().map(negociacao => `
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
        `;
    }
}
