describe('Verify custom ommands',()=>{

    it('should handle custom commands',()=>{
     
        const name = 'Peter'
        const drink = 'Water'
        const color = 'Red'
        const email = 'pp@test.com'
        const message = 'I like Cypress'
    
        cy.visit('https://practice-automation.com/form-fields');

        cy.get('[data-test="contact-form"]').should('be.visible');
        cy.getByTestData('contact-form').should('be.visible');

        cy.getById('g1103-name').type(name)

        cy.getByClass('pushbutton-wide').should('be.visible')
    })

})