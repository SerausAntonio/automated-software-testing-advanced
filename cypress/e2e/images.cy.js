///<reference types="cypress"/>
describe('Image attributes',()=>{

    it('verify image size',()=>{
        cy.visit('https://practice-automation.com/')
        cy.get('img.wp-image-12372').invoke('attr','height').should('eq','175')
        cy.get('img.wp-image-12372').invoke('attr','width').should('eq','175')
    })

  it.only('should not have broken images', () => {
    cy.visit("https://knipselkrant-curacao.com/");

    // Find all images on the page
    cy.get('img').each((img) => {
      // Use the on('error') event to check for broken images
      cy.wrap(img).should('have.attr', 'src').then((src) => {
        cy.request(src).its('status').should('eq', 200);
      });
    });
  });

})