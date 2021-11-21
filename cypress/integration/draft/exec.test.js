describe('', () => {
  it('cy.exec() - execute a system command', () => {
    // execute a system command.
    // so you can take actions necessary for
    // your test outside the scope of Cypress.
    // https://on.cypress.io/exec
    // we can use Cypress.platform string to
    // select appropriate command
    // https://on.cypress/io/platform
    cy.log(`Platform ${Cypress.platform} architecture ${Cypress.arch}`)
    // on CircleCI Windows build machines we have a failure to run bash shell
    // https://github.com/cypress-io/cypress/issues/5169
    // so skip some of the tests by passing flag "--env circle=true"
    const isCircleOnWindows =
      Cypress.platform === 'win32' && Cypress.env('circle')
    if (isCircleOnWindows) {
      cy.log('Skipping test on CircleCI')

      return
    }
    // cy.exec problem on Shippable CI
    // https://github.com/cypress-io/cypress/issues/6718
    const isShippable = Cypress.platform === 'linux' && Cypress.env('shippable')
    if (isShippable) {
      cy.log('Skipping test on ShippableCI')
      return
    }
    cy.exec('echo Jane Lane').its('stdout').should('contain', 'Jane Lane')

    if (Cypress.platform === 'win32') {
      cy.exec('print cypress.json').its('stderr').should('be.empty')
    } else {
      cy.exec('cat cypress.json').its('stderr').should('be.empty')

      cy.exec('pwd').its('code').should('eq', 0)
    }
  })
})
