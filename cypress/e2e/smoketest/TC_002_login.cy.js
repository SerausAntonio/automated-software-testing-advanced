///<reference types="cypress"/>
describe('Login test',()=>{

    it.only('should be able to login with right credentials',()=>{

        cy.visit('https://demoblaze.com/')

        cy.get('#login2').click();
        cy.get('#logInModalLabel').should('contain','Log in')

        cy.get('input#loginusername').type('test')
        cy.get('input#loginpassword').type('test')
        cy.get('button.btn').contains('Log in').click();

        cy.get('a#nameofuser').contains('Welcome test');

    })

    it('login with empty email and password',()=>{
        cy.visit('https://demoblaze.com/')

        cy.get('#login2').click();
        cy.get('#logInModalLabel').should('contain','Log in')

        cy.get('button[type="button"]').contains('Log in').click();
        cy.on('window:confirm',(t)=>{

            expect(t).to.contains('Please fill out Username and Password.');
            
            return true;
        })
        cy.get('button').contains('Close').click({force:true})
    })

    it('Login with wrong username',()=> {
        cy.visit('https://demoblaze.com/')

        cy.get('#login2').click();
        cy.get('#logInModalLabel').should('contain','Log in')
        cy.get('#loginusername').type('Peter')
        cy.get('#loginpassword').type('test')
        cy.get('button.btn').contains('Log in').click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('Wrong password')

        })

    })

    it('Login with wrong password',()=>{
        cy.visit('https://demoblaze.com/')

        cy.get('#login2').click();
        cy.get('#logInModalLabel').should('contain','Log in')
        cy.visit('https://demoblaze.com/')

        cy.get('#loginusername').type('test')
        cy.get('#loginpassword').type('ttt')
        cy.get('button.btn').contains('Log in').click();
    })
})