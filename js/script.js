//Criar metodo para ler propiedade de um objeto
//Exibir somente as propiedades do tipo string que estao no objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropiedades(filme);
function exibirPropiedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}