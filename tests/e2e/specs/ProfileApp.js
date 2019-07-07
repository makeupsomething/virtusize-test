describe('Adding data as a new user', () => {
    it('Allows new user to set up account', () => {
        cy.visit('/')
            .contains('h2', 'Welcome!')
            .getByText(/get started!/i)
            .click()
            .url()
            .should('match', /signup/)
            .get('[id="firstName"]')
            .type('Test')
            .get('[id="lastName"]')
            .type('User')
            .get('[id="email"]')
            .type('test@test.com')
            .get('[id="password"]')
            .type('123456')
            .get('[type="submit"]')
            .click()
            .url()
            .should('match', /profile/)
            .get('[id="user-name"]')
            .should('have.text', 'Test User')
            .get('[id="user-email"]')
            .should('have.text', 'test@test.com')
    })
})

describe('Password shows correct strength output', () => {
    it('Shows the correct text based on the password strength', () => {
        cy.visit('/signup')
            .get('[id="password"]')
            .type('123456')
            .get('[id="password-strength-text"]')
            .contains('span', 'Worst')

            .get('[id="password"]')
            .clear()
            .type('123456abcde')
            .get('[id="password-strength-text"]')
            .contains('span', 'Bad')

            .get('[id="password"]')
            .clear()
            .type('12@@33df')
            .get('[id="password-strength-text"]')
            .contains('span', 'Weak')

            .get('[id="password"]')
            .clear()
            .type('12@@33dfrr')
            .get('[id="password-strength-text"]')
            .contains('span', 'Good')

            .get('[id="password"]')
            .clear()
            .type('12@@33sdfr%')
            .get('[id="password-strength-text"]')
            .contains('span', 'Strong')
    })
})

describe('Updating the users name and email', () => {
    it('Allows user to update their details', () => {
        cy.visit('/')
            .getByText(/get started!/i)
            .click()
            .get('[id="firstName"]')
            .type('Test')
            .get('[id="lastName"]')
            .type('User')
            .get('[id="email"]')
            .type('test@test.com')
            .get('[id="password"]')
            .type('123456')
            .get('[type="submit"]')
            .click()
            .get('#user-name > .btn')
            .click()
            .url()
            .should('eq', `${Cypress.config().baseUrl}profile/edit/name`)
            .get('[id="firstName"]')
            .clear()
            .type('John')
            .get('[id="lastName"]')
            .clear()
            .type('Doe')
            .get('[type="submit"]')
            .click()
            .get('[id="user-name"]')
            .should('have.text', 'John Doe')
            .get('#user-email > .btn')
            .click()
            .url()
            .should('eq', `${Cypress.config().baseUrl}profile/edit/email`)
            .get('[id="email"]')
            .clear()
            .type('johndoe@test.com')
            .get('[type="submit"]')
            .click()
            .get('[id="user-email"]')
            .should('have.text', 'johndoe@test.com')
            .get(':nth-child(4) > .btn')
            .click()
            .get('[id="password"]')
            .clear()
            .type('12@@33sdfr%')
            .get('[id="password-strength-text"]')
            .contains('span', 'Strong')
            .get('[type="submit"]')
            .click()
    })
})

describe('Behaviour when user has data in local storage', () => {
    before(() => {
        localStorage.setItem(
            'userDetails',
            JSON.stringify({
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'doejane@test.com',
            }),
        )
    })

    it('Gets the user data from local storage and redirects to profile page', () => {
        cy.visit('/')
            .url()
            .should('eq', `${Cypress.config().baseUrl}profile/`)
            .get('[id="user-name"]')
            .should('have.text', 'Jane Doe')
            .get('[id="user-email"]')
            .should('have.text', 'doejane@test.com')
    })
})