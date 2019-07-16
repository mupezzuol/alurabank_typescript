import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

//Escuto um evento de SUBMIT e chamo meu método da classe Controller
//Utilizo o bind, para que ele entenda que é referente ao método da controller instanciada, ou seja, utiliza o THIS, ou seja, utilize minha instancia criada
$('.form').submit(controller.adiciona.bind(controller));
$('#btnImportar').click(controller.importaDados.bind(controller));
