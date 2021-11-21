/// <reference types="cypress" />

describe('System info', () => {
  it('Get current version of Cypress being run', () => {
    // https://on.cypress.io/version
    expect(Cypress.version).to.be.exist
  })

  it('Get CPU architecture name of underlying OS', () => {
    // https://on.cypress.io/arch
    expect(Cypress.arch).to.exist
  })

  it('Get CPU architecture name of underlying OS', () => {
    // https://on.cypress.io/arch
    expect(Cypress.arch).to.exist
  })
})
