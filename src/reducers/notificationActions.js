export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

export const setNotification = (message, type) => ({
	type: SET_NOTIFICATION,
	data: {message, type}
})

export const clearNotification = () => ({
	type: CLEAR_NOTIFICATION
})

export const notify = (message, type) => {
	return dispatch => {
		dispatch(setNotification(message, type))
		setTimeout(() => {
			dispatch(clearNotification())
		}, 5000)
	}
}