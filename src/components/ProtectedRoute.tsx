import React, { ComponentType } from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { User } from '../types/User'

const ProtectedRoute = ({component: Component, path, ...rest} : { component : ComponentType<any>, path: string, rest?: any}) => {
	const user: User = useSelector((state : RootStateOrAny) => state.user.loggedInUser)
	console.log('user', user)

	return (
		<Route path={path} {...rest} render={(props) => (
			user.token !== null
			? <Component {...props} />
			: <Redirect to='/login' />
		)}/>
	) 
	
}

export default ProtectedRoute