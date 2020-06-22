/// <reference path="../support/commands.ts" />
import * as user from '../fixtures/user.json'

describe('navbar', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	describe('links', () => {
		it('to projects correctly', () => {
			cy.contains('Projects').click()

			cy.url()
			.should('include', '/projects')
		})
	
		it('to about correctly', () => {
			cy.contains('About').click()

			cy.url()
			.should('include', '/about')
		})
	
		it('to contact correctly', () => {
			cy.contains('Contact').click()

			cy.url()
			.should('include', '/contact')
		})

		it('change color when active', () => {
			const About = cy.contains('About')
			About.click()
			.should('have.css', 'color')
			.and('eq', 'rgb(0, 123, 255)')
		})
	})

	it('toggles dark mode', () => {
		const toggle = cy.get('.ThemeToggle_darkModeToggle__1GBaJ')
		toggle.should('exist')
		toggle.click().should(() => {
			expect(localStorage.getItem('theme')).to.eq(JSON.stringify('dark'))
		})
	})

	describe('changes appropriately when', () => {
		it('on mobile', () => {
			cy.viewport('iphone-6')
			cy.reload()

			const toggle = cy.get('.navbar-toggler.collapsed')
			toggle.should('exist')
			toggle.click()

			cy.contains('Projects')

			cy.contains('About')

			cy.contains('Contact')

			cy.get('.ThemeToggle_darkModeToggle__1GBaJ')
			.should('exist')
		})

		describe('in dark mode', () => {
			beforeEach(() => {
				cy.changeTheme('dark')
			})

			it('text color changes', () => {
				cy.get('.Header_pageLink__1MSBc.Header_dark__1zK7_')
				.should('exist')
				.and('have.css', 'color')
				.and('eq', 'rgb(255, 255, 255)')
			})
		})

		describe('logged in', () => {
			beforeEach(() => {
				cy.login()
				cy.reload()
			})

			it('displays who is logged in', () => {
				cy.contains(user.name)
				.should('exist')
				.and('have.css', 'font-weight')
				.and('eq', '700')
			})

			it('links to the admin page', () => {
				cy.contains(user.name).click()

				cy.url().should('contain', '/admin')
			})

			it('keeps the user\'s name displayed on reload', () => {
				cy.reload()

				cy.contains(user.name)
				.should('exist')
			})

			describe('and in dark mode', () => {
				beforeEach(() => {
					cy.changeTheme('dark')
				})

				it('text color changes', () => {
					cy.contains(user.name)
					.should('have.css', 'color')
					.and('eq', 'rgb(255, 255, 255)')
				})
			})

			it('and on mobile', () => {
				cy.viewport('iphone-6')
				cy.reload()

				cy.get('.navbar-toggler').click()

				cy.contains(user.name)
				.should('be.visible')
			})
		})
	})
})