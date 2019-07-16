//Se for TRUE é pq eu quero em Segundos, caso contrário ele vem como padrão FALSE
export function logarTempoDeExecucao(emSegundos: boolean = false) {

    //Devemos retornar outra função no DECORATOR
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //descriptor.value é o nosso método que está sendo chamado aqui (método com a anotação @logarTempoDeExecucao)
        //Capturamos o método Original
        const metodoOriginal = descriptor.value;

        //Sobrescrevemo o método original com a mesma coisa que ele já fazia + usando performance para verificar o tempo
        descriptor.value = function (...args: any[]) {

            let divisor = 1;
            let unidade = 'milisegundos'
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }

            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const resultado = metodoOriginal.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(resultado)}`)
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            console.log('-----------------------')
            return resultado;
        }
        //Retornamos o método original com alguns ajustes a mais
        return descriptor;
    }
}