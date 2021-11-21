/// <reference types="cypress" />

describe('Cypress.Screenshot', function () {
  it('cy.screenshot() - take a screenshot', () => {
    // https://on.cypress.io/screenshot
    cy.screenshot('my-image')
  })

  it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
    Cypress.Screenshot.defaults({
      blackout: ['.foo'],
      capture: 'viewport',
      clip: { x: 0, y: 0, width: 200, height: 200 },
      scale: false,
      disableTimersAndAnimations: true,
      screenshotOnRunFailure: true,
      onBeforeScreenshot() {},
      onAfterScreenshot() {},
    })
  })
})

// // declare in cypress/support/commands.js
// Cypress.Commands.add('clickButton', (buttonLabel) => {
//   cy.get('button').contains(buttonLabel).click();
// })

// // use anywhere in your tests
// cy.clickButton('Submit');

// // declare in cypress/support/commands.js
// Cypress.Commands.add('getText', { prevSubject: 'element' },
//     ($element: JQuery<HTMLElement>) => {
//       cy.wrap($element).scrollIntoView()
//       return cy.wrap($element).invoke('text')
//     }
//   )

// // use anywhere in your tests
// cy.get('#header').getText();

// // declare in cypress/support/commands.js
// Cypress.Commands.add('getLink', {
//   prevSubject: 'optional'
// }, (subject) => {
//   if (subject) {
//    cy.get(subject).get('a').its('href');
//   } else {
//     cy.get('a').its('href');
//   }
// })

// // use anywhere in your tests
// cy.getLink() // no subject
// cy.get('#dialog').getLink() // with subject
