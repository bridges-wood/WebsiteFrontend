import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { login } from '../reducers/loginActions'


const LoginForm = () => {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	const handleLogin = (event) => {
		event.preventDefault()
		const form = event.target
		const username = form.elements.username.value
		const password = form.elements.password.value
		dispatch(login(username, password))
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
			<Form onSubmit={handleLogin}>
				<Form.Group controlId='formBasicUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control name='username' type='username' placeholder='Enter username'/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control name='password' type='password' placeholder='Password'/>
				</Form.Group>
				<Button id='login-button' variant='primary' type='submit'>
					Login
				</Button>
			</Form>
		</div>
	)
}

export default LoginForm