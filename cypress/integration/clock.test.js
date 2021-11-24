/// <reference types="cypress" />

describe('Control time with cy clock', () => {
  it('Stub stopwatch', () => {
    cy.clock()
    cy.visit('clock.html').pause()
    cy.tick(260000)
    cy.get('.timer').should('contain.text', '04:19')
  })
})
