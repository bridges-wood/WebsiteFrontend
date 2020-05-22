import loginService from '../services/login'

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
		dispatch(loginSuccess(loggedInUser))
	} catch (error) {
		dispatch(loginFailure())
	}
}

export const login = (username, password) => async (dispatch) => {
	dispatch(loginBegin())
	try {
		const loggedInUser = await loginService.login({ username, password })
		localStorage.setItem('user', JSON.stringify(loggedInUser))
		dispatch(loginSuccess(loggedInUser))
	} catch (error) {
		dispatch(loginFailure(error))
	}
}