import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/loginActions'
import { Redirect } from 'react-router-dom'

const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	const handleLogin = (event) => {
		event.preventDefault()
		dispatch(login(username, password))
		setUsername('')
		setPassword('')
	}

	if (user.loading) {
		return (
			<div>
				Logging in...
			</div>
		)
	}

	if (user.loggedInUser.token !== undefined) {
		return (
			<div>
				<Redirect to='/admin' />
			</div>
		)
	}

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					username
					<input
					id='username'
					type='text'
					value={username}
					onChange={({ target }) => setUsername(target.value)}
					/>
				</div>
				<div>
					password
					<input
					id='password'
					type='text'
					value={password}
					onChange={({ target }) => setPassword(target.value)}
					/>
				</div>
				<button id='login-button' type='submit'>login</button>
			</form>
		</div>
	)
}

export default LoginForm