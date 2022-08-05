const catalogo = require("../database/catalogo.json");

module.exports = codigoBuscado => {
    
    function temCodigoIgualAoBuscado(filme){
        if(filme.codigo == codigoBuscado){
            return true
        } else {
            return false
        }
    }
    return catalogo.find(temCodigoIgualAoBuscado);
}