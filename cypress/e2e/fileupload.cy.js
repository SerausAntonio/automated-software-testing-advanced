/// <reference types="cypress"/>
describe('File Upload',()=>{

    it('should upload file',()=>{
        cy.visit('https://practice-automation.com/');

        cy.get('a[href*="file-upload"]').click();
        cy.get('[itemprop="headline"]').should('have.text','File Upload')
        cy.getByClass('wpcf7-contact-form-not-found').should('have.text','Error: Contact form not found.')
        cy.go(-1);
       // cy.get('a[href*="file-upload"]').selectFile('file.json');

    })
    it.only('should upload JSON fixture example file',()=>{
        cy.visit('http://the-internet.herokuapp.com/');
        cy.get('a[href*="/upload"]').click();
        cy.get('input#file-upload').selectFile('./cypress/fixtures/example.json');
        cy.getById('file-submit').click();
        cy.get('div.example').contains('File Uploaded!');
        cy.get('#uploaded-files').contains('example.json');


    })
})