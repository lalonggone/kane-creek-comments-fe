describe('response details', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display the response details', () => {
    cy.get('[href^="/response/"]').first().click()
    cy.get('.response-details-container').should('be.visible')
    cy.get('.response-details').should('be.visible')
    cy.get('.response-details').children().should('have.length', 10)
  })
  
  it ('should go back to the home page', () => {
    cy.get('[href^="/response/"]').first().click()
    cy.get('.go-back').should('be.visible').contains('Go Back').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})