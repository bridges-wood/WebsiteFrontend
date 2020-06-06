import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button, Spinner } from 'react-bootstrap'
import { triggerLogin } from '../../reducers/login/loginActions'
import { User } from '../../types/User'
import { RootState } from '../../store'
import styles from './LoginPage.module.css'


const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const { loggedInUser, loading } : {loggedInUser: User, loading: boolean} = useSelector(( state: RootState ) => state.user)
	const theme = useSelector((state: RootState) => state.theme.theme)
	const dispatch = useDispatch()

	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault()
		dispatch(triggerLogin(username, password))
	}

	if (loggedInUser.token !== null) return ( <Redirect to='/admin' /> )

	return (
		<div className={styles.loginPage}>
			<div className={`${styles.loginForm} ${styles[theme]}`}>
				<h1>Login</h1>
				<Form onSubmit={(event: React.FormEvent) => handleLogin(event)}>
					<Form.Group bsPrefix={`${styles.formGroup} ${styles[theme]}`}
					controlId='formUsername'>
						<Form.Label
						className={`${styles.formlabel} ${styles[theme]}`}>
							Username
						</Form.Label>
						<Form.Control
						name='username'
						type='username'
						placeholder='Enter username'
						className={`${styles.inputBox} ${styles[theme]}`}
						onChange={(event) => setUsername(event.target.value)}
						/>
					</Form.Group>
					<Form.Group bsPrefix={`${styles.formGroup} ${styles[theme]}`}
					controlId='formPassword'>
						<Form.Label
						className={`${styles.formlabel} ${styles[theme]}`}>
							Password
						</Form.Label>
						<Form.Control
						name='password'
						type='current-password'
						placeholder='Password'
						className={`${styles.inputBox} ${styles[theme]}`}
						onChange={(event) => setPassword(event.target.value)}
						/>
					</Form.Group>
					<Button
					id='login-button'
					variant='primary'
					type='submit'
					disabled={loading}>
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
		</div>
	)
}

export default LoginForm