/// <reference types="cypress" />

describe('Network traffic control​​', () => {
  beforeEach(() => {
    cy.visit('https://jsonplaceholder.cypress.io/')
  })

  it('spy on request with debugger', () => {
    cy.intercept('GET', '**/todos/*', req => {
      console.log('REQUEST: ', req)
      debugger
      req.continue(res => {
        console.log('RESPONSE: ', res)
        debugger
      })
    }).as('spyExample')
    cy.get('#run-button').click()
    cy.wait('@spyExample').its('response.body').should('deep.equal', {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    })
  })

  it('stub the response', () => {
    cy.intercept('GET', '**/todos/*', { key: 'value' }).as('stubExample')
    cy.get('#run-button').click()
    cy.wait('@stubExample').its('response.body').should('deep.equal', { key: 'value' })
  })
})
