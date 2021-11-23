describe('NETWORK CONTROL', () => {
  it('SPY', () => {
    cy.intercept('GET', '**/todos/*', req => {
      console.log('REQUEST: ', req)
      debugger
      req.continue(res => {
        console.log('RESPONSE: ', res)
        debugger
      })
    }).as('spyExample')
    cy.intercept('GET', '**/todos/*')
  })

  it('STUB', () => {
    cy.visit('https://jsonplaceholder.cypress.io/')
    cy.get('#run-button').click()
    cy.wait(5000)
    cy.wait('@spyExample').its('response.body').should('deep.equal', {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    })
  })
})
