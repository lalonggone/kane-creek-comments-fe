// describe('404 not found', () => {
    
//     beforeEach(() => {
//       cy.visit('http://localhost:4173/potato')
//     })
  
//     it('should display the 404 page', () => {
//       cy.get('h1').should('be.visible')
//       cy.get('h1').contains('Sorry, this page doesn't exist)
//     })
    
//     it ('should have a button to take user to the home page', () => {
//       cy.get('.go-home').should('be.visible').contains('Go Home').click()
//       cy.url().should('eq', 'http://localhost:4173/')
//     })
//   })