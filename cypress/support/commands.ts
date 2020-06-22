/// <reference types="cypress" />
import { ThemeName } from '../../src/types/Theme'
import loginService from '../../src/services/login'
import projectService from '../../src/services/projects'
import * as user from '../fixtures/user.json'

declare global {
	namespace Cypress {
		interface Chainable {
			changeTheme(theme: ThemeName): void
			login(): void
		}
	}
}

Cypress.Commands.add('changeTheme', (theme: ThemeName) => {
	localStorage.setItem('theme', JSON.stringify(theme))
	cy.reload()
})

Cypress.Commands.add('login', () => {
	cy.request('POST', 'http://localhost:3001/api/testing/reset')
	cy.request('POST', 'http://localhost:3001/api/users', user)
	loginService.login({username: user.username, password: user.password})
	.then(loggedInUser => {
		projectService.setToken(loggedInUser.token)
		localStorage.setItem('user', JSON.stringify(loggedInUser))
		cy.window().its('store')
		.invoke('dispatch', {type: 'LOGIN_SUCCESS', data: loggedInUser})
	})
})

export {}