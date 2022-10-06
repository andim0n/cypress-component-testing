/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import App from '../src/App'

it.only('Application component test', () => {
  mount(<App />)
  cy.get('input[type="text"]')
  cy.get('h4').contains('Footer here')
  cy.get('h1').contains('header')
  cy.get('#username').type('admin')
  cy.get('#password').type('123')
  cy.get('button')
  cy.get('a')
})
