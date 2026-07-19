// API stubbed with fixtures (fake data) so the spec is deterministic.
describe('response details', () => {
  beforeEach(() => {
    cy.intercept('GET', /\/responses\?/, { fixture: 'responses.json' }).as('getResponses')
    cy.intercept('GET', /\/responses\/\d+/, { fixture: 'response.json' }).as('getResponse')
    cy.visit('/')
    cy.wait('@getResponses')
  })

  it('opens the detail page for a response', () => {
    cy.get('.response-card').first().click()
    cy.wait('@getResponse')
    cy.url().should('match', /\/response\/\d+$/)
    cy.get('.response-details').should('be.visible')
    cy.get('.response-name').should('be.visible')
    cy.get('.response-comment').should('be.visible')
  })

  it('goes back to the home page', () => {
    cy.get('.response-card').first().click()
    cy.wait('@getResponse')
    cy.get('.go-back').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})
