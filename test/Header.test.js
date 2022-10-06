import { mount } from '@cypress/react'
import Header from '../src/components/Header'

it('Header component test', () => {
  mount(<Header />)
  cy.get('h1').contains('header')
})
