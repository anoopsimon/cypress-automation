
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })  
  
    it('Verify Search in Automation Practice', () => {
      cy
      .get('#search_query_top').screenshot()
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
  
    
  })
  