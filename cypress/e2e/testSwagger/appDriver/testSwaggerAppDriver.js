class testSwaggerAppDriver {
    requestGet(uri) {
        const url = uri + 'api/character/1'
        cy.request({
            method: 'GET',
            url: url,
            failOnStatusCode: false
        })
    }

    /*
    #swagger.tags = ['AppDriver']
    #swagger.description = 'Testando o AppDriver'
    #swagger.parameters['uri'] = {
        in: 'query',
        type: 'string',
        required: true
    }
        #swagger.responses[200] = {
            description: 'OK',
            schema: {
                $ref: '#/definitions/Character'
            }
        }
    
    */

}
module.exports = testSwaggerAppDriver