/// <reference types ="cypress"/>
describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://example.com')
  })
  afterEach(()=>{
    cy.log('After each test');
  })
  it('Assert Url', () => {
      cy.url().should('include','example')
  })

 
  it('Assert title', () => {
     cy.title().should('equal','Example Domain');

   } )
   it('Assert Element',()=>{
         cy.get('h1').invoke('text').should('eq','Example Domain')

   })
})