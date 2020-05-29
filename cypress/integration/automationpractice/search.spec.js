context('Automation practice - Search Tests',() =>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Search should return results',()=> {        
        const searchTerm='Shirt'
        cy.enterText('#search_query_top',searchTerm)
        cy.clickElement('button[name="submit_search"]')        
        cy.assertContainsText('.product-name', 'Faded Short Sleeve T-shirts')
    })

})