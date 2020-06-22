import * as user from '../fixtures/user.json'
describe('login', () => {
	beforeEach(() => {
		cy.request('POST', 'http://localhost:3001/api/testing/reset')
		cy.request('POST', 'http://localhost:3001/api/users', user)
		cy.visit('http://localhost:3000/login')
	})

	it('renders correctly', () => {
		cy.get('h1')
		.should('exist')
		.and('contain.text', 'Login')

		cy.get('#formUsername')
		.should('exist')

		cy.get('#formPassword')
		.should('exist')

		cy.get('#login-button')
		.should('exist')
	})

	it('works with correct details', () => {
		cy.get('#formUsername').type(user.username)
		cy.get('#formPassword').type(user.password)
		cy.get('#login-button').click()

		cy.url()
		.should('include', '/admin')
	})

	it('fails with incorrect details', () => {
		cy.get('#formUsername').type(user.username.split('').reverse().join(''))
		cy.get('#formPassword').type(user.password.split('').reverse().join(''))
		cy.get('#login-button').click()

		cy.get('.alert-danger')
		.should('exist')
		.and('contain.text', 'Login failed')
	})
})