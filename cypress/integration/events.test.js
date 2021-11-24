/// <reference types="cypress" />

describe('App error', () => {
  it('can be ignored', () => {
    cy.on('uncaught:exception', (e, runnable) => {
      console.log('error', e)
      console.log('runnable', runnable)
      if (e.message.includes('Things went bad')) {
        return true
      }
    })

    cy.visit('error.html')
    cy.get('button#error').click()
    cy.wait(1500)
  })
})
