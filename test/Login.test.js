import { mount } from '@cypress/react'
import Login from '../src/components/Login'

it('Login component test', () => {
  mount(<Login />)
  cy.get('#username').type('admin')
  cy.get('#password').type('123')
  cy.get('button')
})
