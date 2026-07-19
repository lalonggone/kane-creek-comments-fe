describe('404 not found', () => {
  beforeEach(() => {
    // Any unmatched route renders the NotFound component (SPA fallback).
    cy.visit('/definitely-not-a-real-page')
  })

  it('displays the 404 page', () => {
    cy.get('.not-found-title').should('be.visible').and('contain', 'exist')
  })

  it('has a Go Home button that returns to the home page', () => {
    cy.get('.go-home').should('be.visible').click()
    cy.url().should('eq', 'http://localhost:5173/')
  })
})
