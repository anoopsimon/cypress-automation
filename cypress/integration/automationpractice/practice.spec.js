
context('Actions', () => {
    beforeEach(() => {
      cy.visit('/')
    })  
  
    it('Verify Search in Automation Practice', () => {
      cy
      .get('#search_query_top')
      .type('shirt')

      cy.get('button[name="submit_search"]').click()
      cy.get('.product-name').should('contain', 'Faded Short Sleeve T-shirts')

    })

    it('Verify Search Result', () => {
      cy
      .get('#search_query_top')
      .type('shirt')

      cy.get('button[name="submit_search"]').click()
      cy.get('.product-name').should('contain', 'Faded Short Sleeve T-shirts')
    })
  
    it('Verify Login to APP', () => {
      cy
      .get('.login')
      .click()

      cy.get('#SubmitLogin').click()
      cy.get('.alert-danger').should('contain', 'An email address required.')
    })
    
  })
  