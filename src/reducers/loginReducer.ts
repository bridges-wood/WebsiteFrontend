import {
	LOGIN_STARTED,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	LoginActionTypes
} from './loginTypes'
import { User } from '../types/User'

const initialState : { loggedInUser: User, loading: boolean, error: string | null } = {
	loggedInUser: {
		token: null,
		username: null,
		name: null
	},
	loading: false,
	error: null
}

const loginReducer = (state = initialState, action: LoginActionTypes) => {
	switch (action.type) {
		case LOGIN_STARTED:
			return {
				...state,
				loading: true
			}
		case LOGIN_SUCCESS:
			return {
				loggedInUser: action.data,
				loading: false,
				error: null
			}
		case LOGIN_FAILURE:
			return {
				loading: false,
				error: action.data,
				loggedInUser: initialState.loggedInUser
			}
		case LOGOUT:
			return {
				...state,
				loggedInUser: initialState.loggedInUser
			}
		default:
			return state
	}
}

export default loginReducer