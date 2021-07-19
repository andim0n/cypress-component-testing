import { mount } from '@cypress/react'
import Calendar from '../src/components/Calendar'

it('Calendar component test', () => {
  mount(<Calendar />)
  cy.get('input[type="text"]')
})
