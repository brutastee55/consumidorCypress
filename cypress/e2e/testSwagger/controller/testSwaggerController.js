import TestSwaggerAppDriver from '../appDriver/testSwaggerAppDriver'

const testSwaggerAppDriver = new TestSwaggerAppDriver

class testSwaggerController {

    buscarNomeRickMorty(url) {
        testSwaggerAppDriver.requestGet(url)
     }

}
module.exports = testSwaggerController