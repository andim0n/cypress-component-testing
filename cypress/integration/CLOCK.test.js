describe('cy.clock()', () => {
  it('Control timer', () => {
    cy.clock().pause()
    cy.visit('index.html')
    cy.tick(260000)
  })
})
