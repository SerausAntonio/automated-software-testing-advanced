/// <reference types="cypress"/>
describe('invoke calculation of numbers', () => {
  it('Invoke calculations', () => {
    const fn = (a, b, c)=>{
      return a+b+c;
    }
    
    cy.wrap({sum: fn}).invoke('sum', 2, 5 ,10).should('be.greaterThan',10)
    .and('be.lessThan',20);
  })
})