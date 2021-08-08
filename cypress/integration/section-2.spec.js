import Section2 from '../objects/section-2';
import '../support/commands';

describe('Problem 2', () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section2, you can do: Section2.actions.assertSampleApiResponse();
   *
   * Test away!
   */

   const section2 = new Section2();

     it('Visit section 2 ', () => {
       //Navigate to section 2 of the automation challenge
       section2.visit()
     })

     it('Click on the button to trigger an abnormally long network call and Multiple asserts to check the response ', () => {
        cy.intercept('GET','/todos/1').as('getResponse')
        section2.getProblem1Button().click()
        cy.wait('@getResponse')
        const stub = cy.stub()
        cy.on('window:alert', (str) => {
        expect(str).to.equal('Abnormally long network call!')})
     })

    it('Opening a new tab', function() {
        //There are several workarounds to handle this within cypress. I took the approach of just verify the href and not click on it though
        section2.openNewTab().and('equal', 'http://localhost:8080/')
    })

    it('Download a file' , () => {
        //Installed a plugin to download file
       cy.downloadFile('http://localhost:8080/assets/img/javascript-logo.png', 'cypress/fixtures/Download', 'javascript-logo.png')
       cy.readFile('cypress/fixtures/Download/javascript-logo.png').should('exist')
    })

   })
