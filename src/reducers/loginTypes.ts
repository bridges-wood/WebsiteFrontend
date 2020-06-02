import { User } from "../types/User"

export const LOGIN_STARTED = 'LOGIN_STARTED'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

interface loginStarted {
	type: typeof LOGIN_STARTED
}

interface loginSucceeded {
	type: typeof LOGIN_SUCCESS,
	data: User
}

interface loginFailed {
	type: typeof LOGIN_FAILURE,
	data: string
}

interface logoutAction {
	type: typeof LOGOUT
}

export type LoginActionTypes = loginStarted | loginSucceeded | loginFailed | logoutAction