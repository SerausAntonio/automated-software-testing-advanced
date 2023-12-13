describe('Api - Requests', () => {

     it('validate api - requests', () => {

          cy.request('GET', 'https://reqres.in/api/users/2').then(response => {

               console.log(JSON.stringify(response.body))
               window.localStorage.setItem('email', response.body.data.email)

          })

     })
     it('API Tests - GET request', () => {
          cy.request({
               url: 'https://reqres.in/api/users/2',
               method: 'GET',

          }).then(response => {

               console.log(JSON.stringify(response.body.support.text));
               window.localStorage.setItem('support', JSON.stringify(response.body.support.text))
               expect(window.localStorage.getItem('support')).to.eq('"To keep ReqRes free, contributions towards server costs are appreciated!"');
          })

     })
     it('should create user', () => {

          cy.request({
               url: 'https://reqres.in/api/users/2',
               method: 'POST',
               body: {
                    "name": "Peter",
                    "job": "leader"
               }
          }).as('resp')

          cy.get('@resp').then(response => {

               console.log(JSON.stringify(response.body.name));
               expect(response.status).equal(201)
               expect(JSON.stringify(response.body.name)).equal('"Peter"')
               expect(JSON.stringify(response.body.job)).equal('"leader"')

          })
     })
     it('should delete user', () => {

          cy.request({
               url: 'https://reqres.in/api/users/2',
               method: 'DELETE'

          }).its('status').should('eq', 204)

     })

})

