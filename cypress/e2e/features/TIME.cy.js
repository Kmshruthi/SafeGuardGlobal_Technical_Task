describe('Login to Orange HRM website and test the Time module', () => {
  beforeEach(() => {
    cy.LoginWithPageSession("Admin", "admin123")
  })

  it('Click on  the Time module', () => {
    cy.SideMenu(4, "Time", "TimeTimesheets", "Select Employee");
  })


  it('Select the employee', () => {
    cy.SideMenu(4, "Time", "TimeTimesheets", "Select Employee");
    cy.EmployeeSearch("Charlie Carter");
  })


  it('Edit the employee Timesheet', () => {
    cy.SideMenu(4, "Time", "TimeTimesheets", "Select Employee");
    cy.EmployeeSearch("Shruthi K");
    cy.wait(3000)
    // cy.get('.oxd-button').should('have.text', ' Create Timesheet ').click({ force: true })
    cy.get('.oxd-button--ghost').should('have.text', ' Edit ').click({ force: true })//click on Edit button
    cy.EnterFieldValue('.oxd-autocomplete-text-input > input', "Books")//search by books
    cy.get('.oxd-autocomplete-option > span').contains('Fresh Books Software Ltd - Fresh Books Software Ltd - Phase I').click({ force: true });//select the Project
    cy.get('.oxd-select-text-input').click()
    cy.get('.oxd-select-dropdown > :nth-child(6)').contains('QA Testing').click()
    cy.SaveButton()
    // cy.SubmitButton()
    cy.get('.oxd-button--success').should('have.text'," Approve ").click({force:true})
  })

  afterEach(() => {
    cy.Logout()
  })
})
