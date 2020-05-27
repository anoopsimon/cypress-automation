
context('Actions', () => {
    beforeEach(() => {
      cy.visit('/')
    })  
    

    it('Validate that search returns result', () => {
      cy.get('#search_query_top').type('shirt')

      cy.get('button[name="submit_search"]').click()
      cy.get('.product-name').should('contain', 'Faded Short Sleeve T-shirts')
    })
  
    it('Validate that email is mandatory for login', () => {
      cy.get('.login').click()
      cy.get('#SubmitLogin').click()
      cy.get('.alert-danger').should('contain', 'An email address required.')
    })

    
    it('Validate that password is mandatory for login', () => {
      const email='testuser@gmail.com'
      cy.get('.login').click()
      cy.get('#email').type(email).should('have.value', email)
      cy.get('#SubmitLogin').click()
      cy.get('.alert-danger').should('contain', 'Password is required.')
    })
    
    
  })
  