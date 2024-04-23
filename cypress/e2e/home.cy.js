describe('home page', () => {

  // there are no intercepts in this test because the data is static
  
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should display the header', () => {
    cy.get('.header').should('be.visible')
    cy.get('.header').contains('Kane Creek Comments')
  })
  
  it('should display the responses', () => {
    cy.get('.responses').should('be.visible')
    cy.get('[href^="/response/"]').should('have.length', 100)
  })

  it('should search and filter responses', () => {
    cy.get('.search-bar-container').should('be.visible')
    cy.get('.search-bar').should('be.visible')
    cy.get('#search').type('test')
    cy.get('#filter').select('Moab residents')
    cy.get('.responses').each((response) => {
      cy.wrap(response).contains('test')
    })
  })

})