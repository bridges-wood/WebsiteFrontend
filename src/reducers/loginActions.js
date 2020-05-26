import loginService from '../services/login'
import projectService from '../services/projects'

export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

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
	} catch (error) {
		localStorage.removeItem('user')
		dispatch(loginFailure(error))
	}
}

export const login = (username, password) => async (dispatch) => {
	dispatch(loginBegin())
	try {
		const loggedInUser = await loginService.login({ username, password })
		projectService.setToken(loggedInUser.token)
		localStorage.setItem('user', JSON.stringify(loggedInUser))
		dispatch(loginSuccess(loggedInUser))
	} catch (error) {
		dispatch(loginFailure(error))
	}
}