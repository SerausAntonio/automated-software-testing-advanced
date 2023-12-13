/// <reference types="cypress" />
describe('Smoke_Test', () => {

    it('should not have broken images', () => {
        cy.visit('https://demoblaze.com/');
        cy.checkBrokenImages();

    })
    it('should not have broken links', () => {
        cy.visit('https://demoblaze.com/');
        cy.checkBrokenLinks();

    })
    it.only('should load home page', () => {
        cy.visit('https://demoblaze.com/');
        cy.get('#nava').contains('PRODUCT STORE');
        cy.get('ul.navbar-nav').should('be.visible');
        cy.get('.list-group').within(() => {
            cy.get('a').its('length').should('eq', 4);

        })
        cy.get('#footc').within(($footer)=>{
            cy.get($footer).should('contain','About Us')
            .and('contain','Get in Touch').and('contain','PRODUCT STORE')

        })
    })
})