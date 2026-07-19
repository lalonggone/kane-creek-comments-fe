// The API is stubbed with fixtures so these specs are deterministic and don't
// need the backend running. (Fixtures use fake names, never real commenter PII.)
describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', /\/responses\?/, { fixture: 'responses.json' }).as('getResponses')
    cy.intercept('GET', /\/stats/, { fixture: 'stats.json' }).as('getStats')
    cy.visit('/')
    cy.wait('@getResponses')
  })

  it('displays the header with the title', () => {
    cy.get('.header').should('be.visible')
    cy.get('.header h1').should('contain', 'Kane Creek Comments')
  })

  it('shows the stats row from the stats endpoint', () => {
    cy.wait('@getStats')
    cy.get('.stats-row').should('be.visible')
    cy.get('.stats-row .stat-num').first().should('contain', '240')
  })

  it('displays a page of response cards', () => {
    cy.get('.responses').should('be.visible')
    cy.get('.response-card').should('have.length', 12)
    cy.get('.response-card')
      .first()
      .should('have.attr', 'href')
      .and('match', /^\/response\/\d+$/)
  })

  it('requests the residents filter', () => {
    cy.get('#filter').select('residents')
    // StrictMode double-fires effects, so assert against all captured calls.
    cy.get('@getResponses.all').should((calls) => {
      expect(calls.some((c) => c.request.url.includes('residency=residents'))).to.be.true
    })
    cy.get('.response-card').should('exist')
  })

  it('sends the search term to the API', () => {
    cy.get('#search').type('moab')
    cy.get('#search').should('have.value', 'moab')
    cy.get('@getResponses.all').should((calls) => {
      expect(calls.some((c) => c.request.url.includes('q=moab'))).to.be.true
    })
  })
})
