import * as project from '../fixtures/project.json'
describe('projects', () => {
	beforeEach(() => {
		cy.request('POST', 'http://localhost:3001/api/testing/reset')
		cy.request('POST', 'http://localhost:3001/api/testing/projects', project)
		cy.visit('http://localhost:3000/projects')
	})

	it('renders project cards correctly', () => {
		cy.get('.Projects_projectSummary__1oBKd')
		.should('exist')
		
		cy.get('.card-img-top')
		.should('exist')
		.and('have.attr', 'src')
		.and('equal', project.metadata.repoImage)

		cy.get('.Projects_projectTitle__25LD0')
		.should('exist')
		.and('have.text', project.name)
		
		cy.get('.card-text')
		.should('exist')
		.and('have.text', project.description)

		cy.get('.Projects_mainLanguage__kYjT4')
		.should('exist')
		.and('have.text', project.mainLanguage)
	})

	it('changes appropriately for dark mode', () => {
		cy.changeTheme('dark')
		cy.wait(200)

		cy.get('.Projects_projectTitle__25LD0')
		.should('have.css', 'color')
		.and('eq', 'rgb(216, 216, 216)')

		cy.get('.card-text')
		.should('have.css', 'color')
		.and('eq', 'rgb(255, 255, 255)')
	})

	it('links to Github correctly', () => {
		cy.contains('Get the code')
		.should('exist')
		.and('have.attr', 'href')
		.and('equal', project.url)
	})

	describe('project view', () => {
		beforeEach(() => {
			cy.contains('See more').click()
		})

		it('shows the details of the project', () => {
			cy.url()
			.should('include', project.id)

			cy.get('h1')
			.should('exist')
			.and('contain.text', project.name)

			cy.get('table')
			.should('exist')
		})

		it('changes appropriately for dark mode', () => {
			cy.changeTheme('dark')
			cy.wait(200)
	
			cy.get('h1')
			.should('have.css', 'color')
			.and('eq', 'rgb(255, 255, 255)')
	
			cy.contains('%')
			.should('have.css', 'color')
			.and('eq', 'rgb(255, 255, 255)')
		})
	})
})