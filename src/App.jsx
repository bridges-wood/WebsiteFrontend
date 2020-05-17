import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { initializeProjects } from './reducers/projectActions'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Project from './components/Project'
import Contact from './components/Contact'


const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	return (
		<div>
			<Header />
			<Switch>
				<Route path='/about'><div /></Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/projects/:id'>
					<Project />
				</Route>
				<Route path='/projects'>
					<Projects />
				</Route>
				<Route path='/'>
					<Bio />
				</Route>
			</Switch>
			<Footer />
		</div>
	)
}

export default App
