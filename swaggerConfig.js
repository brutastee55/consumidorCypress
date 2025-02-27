const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API Test Automation - Cypress',
    description: 'Documentação gerada automaticamente pelos testes de API do Cypress.',
    version: '1.0.0',
  },
  host: 'api.exemplo.com', // Pode ser alterado dinamicamente conforme o ambiente
  basePath: '/',
  schemes: ['https'], // Pode ser alterado para http se necessário
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {},
};

const outputFile = './swagger.json';
const endpointsFiles = ['./cypress/e2e/testSwagger/appDriver/testSwaggerAppDriver.js']; // Adicione todos os arquivos de teste necessários

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Arquivo Swagger gerado com sucesso!');
});
