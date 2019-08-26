describe('Authorization page', () => {
  it('Check layout', () => {
    cy.fixture('auth').then(json =>{
  cy.visit(json.route)
      .get('title')
      .should('be.exist')
      .get('.error-main')
      .should('be.not.exist')
      .getByTestId('email')
      .should('be.exist')
      .getByTestId('password')
      .should('be.exist')
      .getByTestId('show-password')
      .should('be.exist')
      .get('.link[href="/reset-password"]')
      .should('be.exist')
      .getByTestId('signin-button')
      .should('be.exist')
      .get('.big-link')
      .should('be.exist')
  })
})

  it('Login with empty fields', () => {
    cy.fixture('auth').then(json =>{
  cy.visit(json.route)
      .getByTestId('email')
      .clear()
      .getByTestId('password')
      .clear()
      .getByTestId('signin-button')
      .should('be.disabled')
  })
})

  it('Login with empty login', () => {
    cy.fixture('auth').then(json =>{
  cy.visit(json.route)
      .getByTestId('email')
      .clear()
      .getByTestId('password')
      .type('test2test')
      .getByTestId('signin-button')
      .should('be.disabled')
  })
})

  it('Login with empty password', () => {
    cy.fixture('auth').then(json =>{
  cy.visit(json.route)
      .getByTestId('email')
      .type('test2@test.me')
      .getByTestId('password')
      .clear()
      .getByTestId('signin-button')
      .should('be.disabled')
  })
})

  it('Login error', () => {
    cy.fixture('auth').then(json =>{
  cy.visit(json.route)
      .getByTestId('email')
      .type('test2@test.me')
      .getByTestId('password')
      .type('P@ssword12')
      .getByTestId('signin-button')
      .click()
      .get('.error-main')
      .should('be.exist')
  })
})

  it('Login with valid data', () => {
    cy.fixture('auth').then(json =>{
        cy.visit(json.route)
      .getByTestId('email')
      .type(json.validEmail)
      .getByTestId('password')
      .type(json.validPassword)
      .getByTestId('signin-button')
      .click()
      .get('.error-main')
      .should('be.not.exist')
      .getByTestId('user-logo')
      .should('be.exist')
  })
})
})
