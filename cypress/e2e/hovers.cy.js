/// <reference types="cypress"/>
describe('Assert Mouse hover',()=>{

 it('Should change text with mouse hover',()=>{

    cy.visit('https://practice-automation.com/hover/')
    cy.get('[itemprop="headline"]').contains('Hover')
    cy.get('h3#mouse_over').should('contain.text','Mouse over me');
    cy.get('#mouse_over').trigger('mouseover').should('contain.text','You did it!');
    cy.get('#mouse_over').screenshot({overwrite:true});
 })



})