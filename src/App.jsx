import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProjects } from './reducers/projectActions'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Project from './components/Project'


const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	const projects = useSelector((state) => state.projects)
	const loading = useSelector((state) => state.loading)
	const error = useRouteMatch((state) => state.error)

	const match = useRouteMatch('/projects/:id')
	const project = match
		? projects.find((p) => p.id === Number(match.params.id))
		: null

	return (
		<div>
			<Header />
			<Switch>
				<Route path='/about'><div /></Route>
				<Route path='/contact'><div /></Route>
				<Route path='/projects/:id'>
					<Project
						project={project}
						loading={loading}
						error={error}
					/>
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
