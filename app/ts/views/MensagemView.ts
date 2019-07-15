namespace Views{
    
    //Passo o tipo que eu quero que seja herdado em 'View'
    export class MensagemView extends Views.View<string>{
    
        template(model: string): string {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }

}
