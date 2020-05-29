const loginTestData = require('../../fixtures/logindata.json')

context('Automation practice - Login Tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })  
    
    it('Validate that email is mandatory for login', () => {
      cy.clickElement('.login')
      cy.clickElement('#SubmitLogin')    
      cy.assertErrorMessage('An email address required.')
    })

    
    it('Validate that password is mandatory for login', () => {
      
      const email= loginTestData.email 
           
      cy.clickElement('.login')
      cy.enterText('#email',email)
      cy.assertTextboxValue('#email',email)
      cy.clickElement('#SubmitLogin')    
      cy.assertErrorMessage('Password is required.')
      
    })
    
    
  })
  