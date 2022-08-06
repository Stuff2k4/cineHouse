const catalogo = require('../database/catalogo.json');
const salvarFilmes = require('./salvarFilmes');

const adicionarFilmes = (filme) => {
    catalogo.push(filme);
    salvarFilmes(catalogo);
};

adicionarFilmes({
    codigo: 5,
    anoDeLancamento: 2012,
    titulo: "Rango",
    atores: "[Jhonny Depp]",
    duracao: 150,
    emCartaz: true
});


module.exports = adicionarFilmes