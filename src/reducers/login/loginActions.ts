import loginService from '../../services/login'
import projectService from '../../services/projects'
import { notify } from '../notification/notificationActions'
import { 
	LOGIN_STARTED,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	LoginActionTypes
} from './loginTypes'
import { Dispatch } from 'redux'
import { User } from '../../types/User'



export const loginBegin = () : LoginActionTypes => ({
	type: LOGIN_STARTED
})

export const loginSuccess = (user: User) : LoginActionTypes => ({
	type: LOGIN_SUCCESS,
	data: user
})

export const loginFailure = (error: Error) : LoginActionTypes => ({
	type: LOGIN_FAILURE,
	data: error.message
})

export const logout = () : LoginActionTypes => ({
	type: LOGOUT
})

export const continueSession = () => async (dispatch: Dispatch) => {
	dispatch(loginBegin())
	try {
		const user: User = await loginService.verify(JSON.parse(localStorage.getItem('user')))
		projectService.setToken(user.token)
		dispatch(loginSuccess(user))
		notify('You\'re still logged in.', 'success')
	} catch (error) {
		localStorage.removeItem('user')
		dispatch(loginFailure(error))
		dispatch<any>(notify('Failed to continue session.', 'info'))
	}
}

export const triggerLogin = (username: string, password: string) => async (dispatch: Dispatch) => {
	dispatch(loginBegin())
	try {
		const loggedInUser: User = await loginService.login({ username, password })
		projectService.setToken(loggedInUser.token)
		localStorage.setItem('user', JSON.stringify(loggedInUser))
		dispatch(loginSuccess(loggedInUser))
		dispatch<any>(notify('Successfully logged in.', 'success'))
		
	} catch (error) {
		dispatch(loginFailure(error))
		dispatch<any>(notify('Login failed', 'danger'))
	}
}

export const triggerLogout = () => {
	return (dispatch: Dispatch) => {
		localStorage.removeItem('user') 
		dispatch(logout()) 
		dispatch<any>(notify('Successfully logged out.', 'success'))
	}
}