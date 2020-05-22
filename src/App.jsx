import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeProjects } from './reducers/projectActions'
import { continueSession } from './reducers/loginActions'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Project from './components/Project'
import Contact from './components/Contact'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	useEffect(() => {
		if(window.localStorage.getItem('user')) {
			dispatch(continueSession())
		}
	}, [dispatch])

	return (
		<div>
			<Header />
			<Switch>
				<Route path='/about' component={() => <div />} />
				<ProtectedRoute path='/admin' component={Admin} />
				<Route path='/contact' component={Contact} />
				<Route path='/login' component={LoginPage} />
				<Route path='/projects/:id' component={Project} />
				<Route path='/projects' component={Projects} />
				<Route path='/' component={Bio} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App
