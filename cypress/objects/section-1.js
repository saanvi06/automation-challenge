class Section1 {

  visit()
  {
    cy.visit('http://localhost:8080/section-1');
  }

  getTable()
  {
    return cy.get('table');
  }

  showTableButton()
  {
    return cy.get('button').contains('Show table');
  }

  showTableVisible()
  {
    return cy.get('tr').contains('ID');
  }

  getTableColumnsLength()
  {
    return cy.get('table')
             .find('tr[class=table-header]')
             .children();
  }

  getTableRows()
  {
    return cy.get('table').find('tr');
  }

  getTableHeader()
  {
    return cy.get('tr[class=table-header]').contains('ID');
  }

  getTableValues()
  {
    return cy.get('table >tbody >tr th');
  }

  getTableHeaderDOB()
  {
    return cy.get('table >tbody').contains('th', 'D.O.B');
  }

  getValuesFromDOBColumn()
  {
    return cy.get('table >tbody >tr th:nth-child(4)');
  }

  getForm()
  {
    return cy.get('form');
  }

  showFormButton()
  {
    return cy.get('button').contains('Show Form');
  }

  getFullName()
  {
    return cy.get('input[id="fullName"]');
  }

  getAge()
  {
    return cy.get('input[id="age"]');
  }

  getGender()
  {
    return cy.get('select[id="gender"]');
  }

  getNurseCheckbox()
  {
    return cy.get('input[id="nurse"]');
  }

  getSubmitButton()
  {
    return cy.get('button[id="submit"]');
  }

}

export default Section1;
