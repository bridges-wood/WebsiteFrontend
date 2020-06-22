describe('contact', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/contact')
	})

	it('displays content', () => {
		cy.get('h1')
		.should('exist')
		.and('contain.text', 'Contact')

		cy.get('p')
		.should('exist')
	})

	it('changes appropriately for dark mode', () => {
		cy.changeTheme('dark')
		
		cy.get('h1')
		.should('have.css', 'color')
		.and('eq', 'rgb(255, 255, 255)')

		cy.get('p')
		.should('have.css', 'color')
		.and('eq', 'rgb(255, 255, 255)')
	})
})