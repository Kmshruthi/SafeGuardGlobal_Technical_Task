
describe('Login to Orange HRM website and test the Time module', () => {
  beforeEach(() => {
    cy.LoginWithPageSession("Admin", "admin123")
  })

  it('Assert the mandatory fields on add employee page', () => {//By clicking on Save without adding the values
    cy.SideMenu(2, "PIM", "PIM", "Employee Information");
    cy.get('.orangehrm-header-container > .oxd-button').should('have.text', " Add ").click({ force: true })
    cy.SaveButton()
    // Below validation errors should be seen
    cy.get('.--name-grouped-field > :nth-child(1)').should('have.text', 'Required')
    cy.get('.--name-grouped-field > :nth-child(3)').should('have.text', 'Required')
  })

  it('Assert the employee ID to be unique', () => {//By clicking on Save without adding the values
    cy.SideMenu(2, "PIM", "PIM", "Employee Information");
    cy.get('.orangehrm-header-container > .oxd-button').should('have.text', " Add ").click({ force: true })
    cy.EnterFieldValue('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', "Shruthi")//first name
    cy.EnterFieldValue(':nth-child(2) > :nth-child(2) > .oxd-input', "K")//Middle name
    cy.EnterFieldValue(':nth-child(3) > :nth-child(2) > .oxd-input', "Mukunda")//Last name
    cy.EnterFieldValue('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input','0250')
    cy.SaveButton()
    cy.get('.oxd-grid-2 > .oxd-grid-item > .oxd-input-group').should('have.text', 'Employee IdEmployee Id already exists')//This is a bug in the Dom
  })

  it('Add a employee', () => {
    cy.SideMenu(2, "PIM", "PIM", "Employee Information");
    cy.get('.orangehrm-header-container > .oxd-button').should('have.text', " Add ").click({ force: true })
    cy.EnterFieldValue('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input', "Shruthi")//first name
    cy.EnterFieldValue(':nth-child(2) > :nth-child(2) > .oxd-input', "K")//Middle name
    cy.EnterFieldValue(':nth-child(3) > :nth-child(2) > .oxd-input', "Mukunda")//Last name
    cy.SaveButton()
  })

  afterEach(() => {
    cy.Logout()
  })


})
