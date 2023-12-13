/// <reference types="cypress" />

describe('testing form fields',()=>{

    beforeEach(()=>{
        cy.visit('https://practice-automation.com/form-fields')
        cy.get('#cookie_action_close_header').click();

    })
    it('should contain header text',()=>{
        cy.get('h1.wp-block-heading').invoke('text').should('equal',
        'Welcome to your software automation practice website! ')
        cy.get('#cookie_action_close_header').click();
    })
    it ('verify form fields',()=>{
       
        cy.get('a[href*="form-fields"]').click();
        cy.get('h1[itemprop="headline"]').contains('Form Fields')


    })
    it('Verify text field',()=>{
        
       // cy.get('a[href*="form-fields"]').click();
        cy.get('#g1103-name').type('Hello World!!')

    })
    it.only('Verify check boxes',()=>{
        cy.get('#g1103-name').type('Hello World!!')
        cy.get('#g1103-whatisyourfavoritedrink-Water').check();
        cy.get('#g1103-whatisyourfavoritedrink-Water').should('be.checked');
        cy.get('#g1103-whatisyourfavoritedrink-Coffee').check();
        cy.get('#g1103-whatisyourfavoritedrink-Coffee').should('be.checked');
        
        cy.get('#g1103-whatisyourfavoritecolor-Blue').click();
        cy.get('#g1103-whatisyourfavoritecolor-Blue').should('be.checked');

        cy.get('.ui-selectmenu-text').click();
        cy.get('#ui-id-3').click();
        cy.get('span.ui-selectmenu-text').contains('Yes');
        cy.get('ul > li:nth-child(1)').contains('Falcon')
        cy.get('ul > li:nth-child(2)').contains('Eagle')
        cy.get('ul > li:nth-child(3)').contains('Horsefly')
        cy.get('ul > li:nth-child(4)').contains('Cheetah')

        cy.get('#email').type('aaaa@hotmail.com')

        cy.get('#contact-form-comment-message').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')

        cy.get('button').contains('Submit').click();
        cy.get('#contact-form-success-header').contains('Your message has been sent')
        cy.get('a.link').contains('Go back')
    })
    


})
