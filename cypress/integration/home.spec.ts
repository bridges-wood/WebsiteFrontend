/// <reference path="../support/commands.ts" />
describe('homepage', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})
	
	it('renders name', () => {
		cy.contains('Max Wood')
	})

	describe('changes appropriately for', () => {
		it('iPhone 6', () => {
			cy.viewport('iphone-6')
			cy.reload()
			cy.get('h1').should('have.css', 'font-size').and('match', /32px/)
			cy.get('p').should('have.css', 'font-size').and('match', /16px/)
			cy.contains('Full-time student and autodidact.')
		})

		it('iPhone XR', () => {
			cy.viewport('iphone-xr')
			cy.reload()
			cy.get('h1').should('have.css', 'font-size').and('match', /48px/)
			cy.get('p').should('have.css', 'font-size').and('match', /20px/)
			cy.contains('Full-time student and autodidact.')
		})

		it('4K', () => {
			cy.viewport(3840, 2160)
			cy.reload()
			cy.get('h1').should('have.css', 'font-size').and('match', /128px/)
			cy.get('p').should('have.css', 'font-size').and('match', /30px/)
			cy.contains('Full-time student, self-teaching fullstack web development and game development on the side.')
		})

		describe('dark mode', () => {
			beforeEach(() => {
				cy.changeTheme('dark')
			})

			it('text color changes', () => {
				cy.get('h1').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)')
				cy.get('p').should('have.css', 'color').and('eq', 'rgb(255, 255, 255)')
			})
		})
	})
})