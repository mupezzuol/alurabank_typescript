//Passo o tipo que eu quero que seja herdado em 'View'
class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
