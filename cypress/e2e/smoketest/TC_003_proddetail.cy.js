describe('Product Detail',()=>{

    it('should get product detail',()=>{
        const phone = 'Iphone 6 32gb'
        cy.visit('https://demoblaze.com/index.html');
        cy.get('img[src*="iphone_6.jpg"]').click();
        cy.get('h2.name').should('have.text',`${phone}`)


    })

})