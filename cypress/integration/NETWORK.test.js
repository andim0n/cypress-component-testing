const responseBody = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}
describe('', () => {
  it.only('', () => {
    let resBody
    cy.intercept('**/todos/*', req => {
      console.log('REQUEST: ', req)
      debugger
      req.continue(res => {
        console.log('RESPONSE: ', res)
        debugger
      })
    }).as('todos')

    cy.visit('/')
    cy.get('#run-button').click()
    // cy.wait('@todos') //.its('response.body').should('deep.equal', responseBody)
  })
})
