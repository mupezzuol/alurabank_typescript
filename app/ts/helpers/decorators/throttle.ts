export function throttle(milissegundos = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        let timer = 0;

        //Só chamo o método, pois não terá retorno
        //Evito o multiplos clicks na função usando Timer, para ele dar um tempo antes de executar novamente
        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault();//Se existe 'event' ele não recarrega a página
            
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }

        return descriptor;
    }
}