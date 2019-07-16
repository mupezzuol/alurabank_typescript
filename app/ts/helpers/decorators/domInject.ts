//Recebo o seletor (#data, #quantidade etc...)
export function domInject(seletor: string) {

    //Retorno a function
    return function (target: any, key: string) {

        //Crio um elemento
        let elemento: JQuery;

        //Crio uma function chamada 'getter' que faz as validações
        const getter = function () {

            //Se o elemento é vazio ele não foi acessando, portanto BUSQUE os valores
            if (!elemento) {
                console.log(`Buscando  ${seletor} para injetar em ${key}`);
                elemento = $(seletor);//Recebe o valor do seletor
            }
            //Retorna o elemento
            return elemento;
        }

        //Essa function faz com que eu CRIE um método através de outro método
        //Eu crio um GET e esse get será diferente, ele fará tudo que está dentro de 'getter' que criamos acima
        Object.defineProperty(target, key, {
            get: getter
        });
    }
}