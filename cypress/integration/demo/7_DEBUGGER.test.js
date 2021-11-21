/// <reference types="cypress" />

describe('', () => {
  it('let me debug when the after the command executes', () => {
    cy.visit('https://the-internet.herokuapp.com/tables')

    cy.get('#table1').debug()
    //   .then($table => {
    // Debugger is hit after the cy.visit
    // and cy.get command have completed
    //   debugger
    // })
  })
})
