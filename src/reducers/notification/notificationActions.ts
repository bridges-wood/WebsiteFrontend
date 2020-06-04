import { Dispatch } from 'redux'
import {
	SET_NOTIFICATION,
	CLEAR_NOTIFICATION,
	NotificationTypes
} from './notificationTypes'

export const setNotification = (message: string, notificationType: string) : NotificationTypes => ({
	type: SET_NOTIFICATION,
	data: {message, type: notificationType}
})

export const clearNotification = () : NotificationTypes => ({
	type: CLEAR_NOTIFICATION
})

export const notify = (message: string, notificationType: string) => {
	return (dispatch: Dispatch) => {
		dispatch(setNotification(message, notificationType))
		setTimeout(() => {
			dispatch(clearNotification())
		}, 5000)}
}