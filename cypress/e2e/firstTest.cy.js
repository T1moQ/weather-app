describe('template spec', () => {
  it('first rendered DOM', () => {
    cy.visit('http://172.20.10.3:5173/weather-app/')

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('have.text', 'Weather Forecast App')

    cy.get('input').should('exist').should('have.value', '')
    cy.get('button').should('exist')
  })

  it('should make a request to the server and have a response', () => {
    cy.visit('http://172.20.10.3:5173/weather-app/')

    cy.get('input').type('Novosibirsk')
    cy.get('button').click()
    cy.get('input').should('have.value', '')

    cy.get('[data-testid="cypress-display"]').get('div').contains('Novosibirsk')
    cy.get('[data-testid="cypress-display"]').get('h2').should('exist')
  })

  it('wrong request case', () => {
    cy.visit('http://172.20.10.3:5173/weather-app/')
    cy.get('input').type('AZAZAZ')
    cy.get('button').click()

    cy.get('h2').contains('Sorry... There is no such city in the list =(')
  })

  it('empty request case', () => {
    cy.visit('http://172.20.10.3:5173/weather-app/')
    cy.get('button').click()

    cy.get('h2').contains('The city name field cannot be empty')
  })
})
