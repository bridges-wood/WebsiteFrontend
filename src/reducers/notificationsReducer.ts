import {
	SET_NOTIFICATION,
	CLEAR_NOTIFICATION,
	NotificationTypes
} from './notificationTypes'

const initialState: { message: string | null, type: string | null} = {
	message: null,
	type: null
}

const notificationReducer = (state = initialState, action: NotificationTypes) => {
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