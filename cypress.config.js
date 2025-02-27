const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const addCucumberPreprocessorPlugin = preprocessor.addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configura o bundler para suportar o Cucumber
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Define onde os arquivos .feature estão localizados
    supportFile: "cypress/support/e2e.js",
  },
});
