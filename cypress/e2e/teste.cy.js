describe('testandoLib', () => {
    it('testando', () => {
        cy.requestRest('GET', 'https://rickandmortyapi.com/', 'api/character/1')
            .then(response => {
                expect(response.status).to.eq(200)
            })
    })
});