const { idText, isExportDeclaration, createYield } = require('typescript')
const { Section1 } = require('../objects/section-1')

describe('Problem 1', () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section1, you can do: Section1.actions.assertSampleApiResponse();
   *
   * Test away!
   */

  it('Visit section 1 ', () => {
    //Navigate to section 1 of the automation challenge
    cy.visit('http://localhost:8080/section-1') 
  })
  
  it('Assert that the table is not visible initially ', () => {
  //Assert that the table is not visible
  cy.get('table').should('not.be.visible')
  })
   
  it('Click on the Show table button', () => {
  //Click on the Show table button
  cy.get('button').contains('Show table').click()
  })
    
  it('Assert that the table is visible', () => {
    //Assert that the table is visible
    cy.get('tr').contains('ID')
  })
    
  it('Assert that the table is 5 columns wide', () => {
  //Assert that the table is 5 columns wide
  cy.get('table')
  .find('tr[class=table-header]')
  .children()
  .should('have.length', 5)
  })
    
  it('Assert that the table has 10 rows excluding the header', () => {
    //Assert that the table has 10 rows excluding the header
    cy.get('table').find('tr').then((row) => {
      row.length
      if(cy.get('tr[class=table-header]').contains('ID'))
      row = row.length-1
      cy.log(row)
      expect(row).to.equal(10)
    })
  })
  
  it('Assert that atleast 5 entries have the role user', function () {
    //Assert that atleast 5 entries have the role user
    let values = []
    cy.get('table >tbody >tr').contains('th', 'user').should('be.visible')
    cy.get('table >tbody >tr th').each(($el) =>{
      cy.wrap($el)
      .invoke('text')
      .then(text => {
        if(text.includes('user'))
        values.push(text.trim)
      })
    })
    .then(() => expect(values).to.be.length(6))
    cy.get(values).should('have.length.greaterThan',5)  
  })
 
it('Assert there are exactly 3 people older than 60 years old', function () {
  //Assert there are exactly 3 people older than 60 years old
  let ageValues = []
  let age = []
  cy.get('table >tbody').contains('th', 'D.O.B').should('be.visible')
    cy.get('table >tbody >tr th:nth-child(4)').each(($el, index, $list) =>{
      cy.wrap($el)
      .invoke('text')
      .then(text => {        
        ageValues.push(text.trim)      
      for(var i=0; i<=ageValues.length; i++){ 
        cy.calculateAge(ageValues.indexOf(i)).then((return_value) => {
           cy.log(return_value)
          })
        }
        });
      });
    })
   
    
  it('Assert that the form is not visible', () => {
    //Assert that the form is not visible
    cy.get('form').should('not.be.visible')
  } )

  it('Click on the Show Form button', () => {
    //Click on the Show Form button
    cy.get('button').contains('Show Form').click()
    })
      
    it('Assert that the form is visible', () => {
      //Assert that the form is visible
      cy.get('form').should('be.visible')
    })

    it('Fill in the "Name" and "Age" inputs, and assert that both inputs are filled', () => {
      //Fill in the "Name" and "Age" inputs, and assert that both inputs are filled
      cy.get('[type="text"]').focus()
      cy.get('input[id="fullName"]').type('FullName').should('have.value','FullName')
      cy.get('input[id="age"]').type(25).should('have.value','25')
    })

    it('Select "Female" from the select option, and assert that the value is "female"', () => {
      //Select "Female" from the select option, and assert that the value is "female"
      cy.get('select[id="gender"]').select('Female').should('have.value','female')
    })
    
    it('Tick the "Nurse" checkbox and assert that the value "nurse" is true', () => {
      //Tick the "Nurse" checkbox and assert that the value "nurse" is true
      cy.get('input[id="nurse"]').check().should('be.checked')
    })

    it('Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!"', function () {
      //Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!"
      cy.get('button[id="submit"]').click()
      const stub = cy.stub()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Form submitted!')
      })
      
    })

})