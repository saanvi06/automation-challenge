class Section2 {

visit()
  {
    cy.visit('http://localhost:8080/section-2');
  }

getProblem1Button()
{
    return cy.get('button[id="network-call-button"]').contains('Click me!')
}

getProblem2Button()
{
    return cy.get('button[id="new-tab-button"]').contains('Click me!')
}

getProblem3Button()
{
    return cy.get('button[id="file-download-button"]').contains('Click me!')
}

openNewTab()
{
    return cy.get('a').should('have.prop', 'href')
}

}

export default Section2;
