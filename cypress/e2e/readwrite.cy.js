describe('Cypress files',()=>{
    let data;
    it('should write to a JSON file',()=>{

            cy.writeFile('cypress/fixtures/data.json',{name: 'Peter', email: "pp@test.com"})

    })

    it('should read data from JSON file',()=>{

        cy.readFile('cypress/fixtures/data.json').its('name').should('eq','Peter')
        cy.readFile('cypress/fixtures/data.json').then(data =>{

            expect(data.name).to.eq('Peter');
            expect(data.email).to.eq('pp@test.com');
        })
        cy.fixture('data').as('userData');
        cy.get('@userData').then(data =>{

            expect(data.name).to.eq('Peter');
            expect(data.email).to.eq('pp@test.com');
        })
        cy.fixture('data.json').then(data => {

            cy.log(data)
        })
        
    })


})