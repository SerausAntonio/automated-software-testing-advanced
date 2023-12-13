///<reference types="cypress"/>
describe('Data Tables', () => {
    it('Verify table elements', () => {
        cy.visit('/')
       // cy.title().contains('Tables | automateNow | Practice');
        cy.contains('tr','Laptop').then(tableRow=>{
            cy.log(tableRow.text());
            cy.wrap(tableRow).find('td:nth-child(2)').should('have.text','$1200.00')
        })
        cy.contains('tr','Pakistan').then(tableRow=>{
            cy.log(tableRow.text());
            cy.wrap(tableRow).find('td:nth-child(3)').should('have.text',220.9);
        })

    })
    it('should search in table for item',{retries: 3},()=>{
        cy.visit('/')
        cy.get('input[type="search"]').eq(0).type('brazil')

        cy.get('table#tablepress-1 > tbody > tr').contains('Brazil')
        cy.screenshot({overwrite: true})
    })

    it('Validate items inside the data table',()=>{
        const baseUrl = Cypress.config('baseUrl');
        cy.visit('/')
        cy.url().should('contain',`${baseUrl}`);
        cy.get('.wp-block-table').within(()=>{
            cy.get('td').eq(0).should('contain','Item');
            cy.get('td').eq(1).should('contain','Price');

        })
    })

})