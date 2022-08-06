const fs = require('fs');
const { stringify } = require('querystring');
const path = require('path')

const salvarFilmes = (filmes) => {
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    let json = JSON.stringify(filmes, null, 4);
    fs.writeFileSync(arquivo, json);
};



module.exports = salvarFilmes