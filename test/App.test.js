/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import App from '../src/App'

it.only('Application component test', () => {
  mount(<App />)
  cy.get('div')
})
