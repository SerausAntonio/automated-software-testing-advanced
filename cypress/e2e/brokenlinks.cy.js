describe('Broken Links',()=>{

    xit('should not contain broken links',()=>{

         cy.visit('http://www.nu.nl')
         cy.checkBrokenLinks();
        
        //   cy.get('a').each((link) => {
        //     cy.request(link.prop('href')).then((response) => {
        //       expect(response.status).to.eq(200);
        //     });
        // })
    })

    // brokenLinks.spec.js

 it.only('should not have broken links on the page', () => {
      cy.visit('https://knipselkrant-curacao.com/');
      cy.checkBrokenLinks();
 });
 

})