export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'

interface setNotification {
	type: typeof SET_NOTIFICATION,
	data : {
		message: string,
		type: string
	}
}

interface clearNotification {
	type: typeof CLEAR_NOTIFICATION,
}

export type NotificationTypes = setNotification | clearNotification