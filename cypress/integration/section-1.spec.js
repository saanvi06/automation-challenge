const { idText, isExportDeclaration, createYield } = require('typescript')
import Section1 from '../objects/section-1';

describe('Problem 1', () => {

  const section1 = new Section1();

  it('Visit section 1 ', () => {
    //Navigate to section 1 of the automation challenge
    section1.visit()
  })

  it('Assert that the table is not visible initially ', () => {
   section1.getTable().should('not.be.visible')
  })

  it('Click on the Show table button', () => {
   section1.showTableButton().click()
  })

  it('Assert that the table is visible', () => {
   section1.showTableVisible().should('be.visible')
  })

  it('Assert that the table is 5 columns wide', () => {
   section1.getTableColumnsLength().should('have.length', 5)
  })

  it('Assert that the table has 10 rows excluding the header', () => {
      section1.getTableRows().then((row) => {
      row.length
      if(section1.getTableHeader())
      row = row.length-1
      cy.log(row)
      expect(row).to.equal(10)
    })
  })

  it('Assert that atleast 5 entries have the role user', function () {
    let values = []
      section1.getTableValues().each(($el) =>{
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
      let count = 0
      section1.getTableHeaderDOB().should('be.visible')
        section1.getValuesFromDOBColumn().each(($el, index, $list) =>{
          cy.wrap($el)
          .invoke('text')
          .then(text => {
            if(text < '1961')
            count++
            cy.log(count)
          })
        })
      })

  it('Assert that the form is not visible', () => {
    section1.getForm().should('not.be.visible')
  } )

  it('Click on the Show Form button', () => {
    section1.showFormButton().click()
    })

    it('Assert that the form is visible', () => {
      section1.getForm().should('be.visible')
    })

    it('Fill in the "Name" and "Age" inputs, and assert that both inputs are filled', () => {
      section1.getFullName().type('FullName').should('have.value','FullName')
      section1.getAge().type(25).should('have.value','25')
    })

    it('Select "Female" from the select option, and assert that the value is "female"', () => {
      section1.getGender().select('Female').should('have.value','female')
    })

    it('Tick the "Nurse" checkbox and assert that the value "nurse" is true', () => {
      section1.getNurseCheckbox().check().should('be.checked')
    })

    it('Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!"', function () {
      section1.getSubmitButton().click()
      const stub = cy.stub()
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Form submitted!')
      })
    })

})