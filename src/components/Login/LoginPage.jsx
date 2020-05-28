import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, Spinner } from 'react-bootstrap'
import { login } from '../../reducers/loginActions'


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

	if (user.loggedInUser.token !== undefined) return ( <Redirect to='/admin' /> )
	

	return (
		<div>
			<h2>Login</h2>
			<Form onSubmit={handleLogin}>
				<Form.Group controlId='formUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
					name='username'
					type='username'
					placeholder='Enter username'
					style={{
						maxWidth: '30%'
					}}
					/>
				</Form.Group>
				<Form.Group controlId='formPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
					name='password'
					type='password'
					placeholder='Password'
					style={{
						maxWidth: '30%'
					}}
					/>
				</Form.Group>
				<Button id='login-button' variant='primary' type='submit' disabled={user.loading}>
					{user.loading
					?
					<>
						<Spinner 
						as='span'
						animation='border'
						size='sm'
						role='status'
						/> 
						<span> Logging in...</span>
					</>
					: <>Login</>}
				</Button>
			</Form>
		</div>
	)
}

export default LoginForm