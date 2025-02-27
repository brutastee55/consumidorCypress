const { gerarStringAleatoria, gerarNumeroAleatorio, gerarNumeroPares, gerarStringAleatoriaMaiuscula, gerarNomesAleatorios } = require('cypress-lib/cypress/support/utils/index')

console.log(gerarNumeroAleatorio(10, 50));
console.log(gerarStringAleatoria(10));
console.log(gerarNumeroPares(10, 100));
console.log(gerarStringAleatoriaMaiuscula(10));
console.log(gerarNomesAleatorios());
