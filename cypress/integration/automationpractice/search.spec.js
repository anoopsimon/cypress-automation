context('Automation practice - Search Tests',() =>{
    beforeEach(()=>{
        cy.visit('/')
        cy.fixture('searchdata').then((data) => {
            searchTestData = data
          })
    
    })

    let searchTestData

  
    it('Search should return results',()=> {        
        let searchTerm = searchTestData.searchKeyword
        cy.enterText('#search_query_top',searchTerm)
        cy.clickElement('button[name="submit_search"]')        
        cy.assertContainsText('.product-name', 'Faded Short Sleeve T-shirts')
    })

})