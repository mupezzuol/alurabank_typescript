//Passo o tipo que eu quero que seja herdado em 'View'
class MensagemView extends View<string>{

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }


}