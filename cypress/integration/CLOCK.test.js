describe('cy.clock()', () => {
  it('Control timer', () => {
    cy.clock()
    cy.visit('clock.html').pause()
    cy.tick(260000)
  })
})
