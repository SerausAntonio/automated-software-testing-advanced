/// <reference types="cypress"/>

describe('Verify Models',()=>{

 it('verify page title',()=>{
    cy.visit('https://practice-automation.com/modals/')
    cy.get('h1[itemprop="headline"]').invoke('text').should('equal','Modals')

 })   

 it('Verify Simple Model',()=>{

    cy.visit('https://practice-automation.com/modals/')
    //cy.get('#cookie_action_close_header').click();
    cy.get('#simpleModal').contains('Simple Modal');
    cy.get('#simpleModal').click();
    cy.get('#pum_popup_title_1318').contains('Simple Modal')
    cy.get('.pum-content').contains('Hi, I’m a simple modal.')
    cy.get('.pum-close').eq(0).click({force:true});

 })

 it.only('Verify Form Modal',()=>{
    cy.visit('https://practice-automation.com/modals/');
 //   cy.get('#cookie_action_close_header').click();
    cy.get('#formModal').contains('Form Modal')
    cy.get('#formModal').click();
    cy.get('.pum-title').contains('Modal Containing A Form')
    cy.get('#g1051-name').type('Peter Parker');
    cy.get('#g1051-email').type('pp@hotmail.com')
    cy.get('#contact-form-comment-g1051-message').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,')
    cy.get('button').contains('Submit').click();
   })

})