import React from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Notification = () => {
	const {message, type} = useSelector((state) => state.notification)
	if ( message === null ) return null
	return (
		<Alert variant={type}>
			{message}
		</Alert>
	)
}

export default Notification