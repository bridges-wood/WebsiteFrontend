import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, Spinner } from 'react-bootstrap'
import { triggerLogin } from '../../reducers/loginActions'
import { User } from '../../types/User'
import { RootState } from '../../store'


const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { loggedInUser, loading } : {loggedInUser: User, loading: boolean} = useSelector(( state: RootState ) => state.user)
	const dispatch = useDispatch()

	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault()
		dispatch(triggerLogin(username, password))
	}

	if (loggedInUser.token !== null) return ( <Redirect to='/admin' /> )

	return (
		<div>
			<h2>Login</h2>
			<Form onSubmit={(event: React.FormEvent) => handleLogin(event)}>
				<Form.Group controlId='formUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
					name='username'
					type='username'
					placeholder='Enter username'
					style={{
						maxWidth: '60%'
					}}
					onChange={(event) => setUsername(event.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
					name='password'
					type='password'
					placeholder='Password'
					style={{
						maxWidth: '60%'
					}}
					onChange={(event) => setPassword(event.target.value)}
					/>
				</Form.Group>
				<Button id='login-button' variant='primary' type='submit' disabled={loading}>
					{loading
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