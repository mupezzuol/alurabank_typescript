//Importando dependencia da Classe 'View'
import { View } from './View';

//Passo o tipo que eu quero que seja herdado em 'View'
export class MensagemView extends View<string>{

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
