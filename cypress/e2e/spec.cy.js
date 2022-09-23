/// <reference types="cypress" />
describe('field', () => {
  it('clear works', () => {
    cy.visit('localhost:3000');

    cy.get( "input" )
      .clear()
      .type( "input@input.input" );
  })

  it('clear (actually) works', () => {
    cy.visit('localhost:3000');

    cy.get( "input" )
      // .clear()
      .type( "{selectall}{backspace}input@input.input" );
  })
})
