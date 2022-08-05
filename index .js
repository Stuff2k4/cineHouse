const catalogo = require("./database/catalogo.json");
const mostrarFilmes = require("./functions/mostrarFilmes");
const buscar = require("./functions/buscar");

let acao = process.argv[2];

switch(acao){
    case 'mostrar':
        mostrarFilmes(catalogo);
    break;

    case 'buscar':
        let codigo = process.argv[3];
        let filmeEncontrado = buscar(codigo);
        console.log(filmeEncontrado);
    break;

    case 'adicionar':
        console.log("Adicionando Filme...");
    break;
        
    default:
        console.log("Comando não encontrado")
}

