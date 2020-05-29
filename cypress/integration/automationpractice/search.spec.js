context('Automation practice - Search Tests',() =>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Search should return results',()=> {
        cy.get('#search_query_top').type('shirt')
        cy.get('button[name="submit_search"]').click()
        cy.get('.product-name').should('contain', 'Faded Short Sleeve T-shirts')
    })

})