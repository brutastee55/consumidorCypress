import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import TestSwaggerController from '../controller/testSwaggerController'

const testSwaggerController = new TestSwaggerController

Given("dado que tenho um endpoint", () => {
    testSwaggerController.buscarNomeRickMorty("https://rickandmortyapi.com/")
})

When("quero criar um swagger com os endpooit", () => {

})

Then("valido que foi criado", () => {

})