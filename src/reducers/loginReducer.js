import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT
} from './loginActions'

const initialState = {
	loggedInUser: {},
	loading: false,
	error: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_BEGIN:
			return {
				...state,
				loading: true
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				loggedInUser: action.data,
				loading: false,
			}
		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.data,
				loggedInUser: {}
			}
		case LOGOUT:
			return {
				...state,
				loggedInUser: {}
			}
		default:
			return state
	}
}

export default loginReducer