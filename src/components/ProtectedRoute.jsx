import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
	const user = useSelector(state => state.user)

	return (
		<Route {...rest} render={(props) => (
			user.loggedInUser.token !== undefined
			? <Component {...props} />
			: <Redirect to='/login' />
		)}/>
	) 
	
}

export default ProtectedRoute