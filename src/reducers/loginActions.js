import loginService from '../services/login'
import projectService from '../services/projects'
import { notify } from './notificationActions'

export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginBegin = () => ({
	type: LOGIN_BEGIN
})

export const loginSuccess = (loggedInUser) => ({
	type: LOGIN_SUCCESS,
	data: loggedInUser
})

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE,
	data: error.message
})

export const continueSession = () => async (dispatch) => {
	dispatch(loginBegin())
	try {
		const loggedInUser = await loginService.verify(JSON.parse(localStorage.getItem('user')))
		projectService.setToken(loggedInUser.token)
		dispatch(loginSuccess(loggedInUser))
		dispatch(notify('You\'re still logged in.', 'success'))
	} catch (error) {
		localStorage.removeItem('user')
		dispatch(loginFailure(error))
		dispatch(notify('Failed to continue session.', 'info'))
	}
}

export const login = (username, password) => async (dispatch) => {
	dispatch(loginBegin())
	try {
		const loggedInUser = await loginService.login({ username, password })
		projectService.setToken(loggedInUser.token)
		localStorage.setItem('user', JSON.stringify(loggedInUser))
		dispatch(loginSuccess(loggedInUser))
		dispatch(notify('Successfully logged in.', 'success'))
	} catch (error) {
		dispatch(loginFailure(error))
		dispatch(notify('Login failed', 'danger'))
	}
}

export const logout = () => {
	return dispatch => {
		localStorage.removeItem('user')
		dispatch({ type: LOGOUT })
		dispatch(notify('Successfully logged out.', 'success'))
	}
}