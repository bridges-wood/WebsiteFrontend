import {
	SET_NOTIFICATION,
	CLEAR_NOTIFICATION
} from './notificationActions'

const initialState = {
	message: null,
	type: null
}

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NOTIFICATION:
			return {
				message: action.data.message,
				type: action.data.type
			}
		case CLEAR_NOTIFICATION:
			return initialState
		default:
			return state
	}
}

export default notificationReducer