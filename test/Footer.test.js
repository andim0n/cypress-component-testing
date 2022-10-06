import { mount } from '@cypress/react'
import Footer from '../src/components/Footer'

it('Footer component test', () => {
  mount(<Footer />)
  cy.get('h4').contains('Footer here')
})
