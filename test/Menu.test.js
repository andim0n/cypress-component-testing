import { mount } from '@cypress/react'
import Menu from '../src/components/Menu'

it('Menu component test', () => {
  mount(<Menu />)
  cy.get('a')
})
