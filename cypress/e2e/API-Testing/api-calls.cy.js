/// <reference types="cypress"/>
describe('Validate headers',()=>{

    it.only('Learn REST API Testing with Cypress',()=>{
        cy.request('GET','https://reqres.in/api/users?page=2').then(response=>{
            console.log(JSON.stringify(response.headers))
           // expect(response.status).to.eq(200)
        })


    })
    it('passes',()=>{
        cy.request('GET','https://reqres.in/api/users/2').as('user')
         cy.get('@user')
        .its('headers')
        .its('content-type')
        .should('include','application/json')
        
        cy.get('@user')
        .its('headers')
        .its('connection')
        .should('include','keep-alive')
        
    })
    
})