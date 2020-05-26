import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Bio from './Bio'
import Projects from './Projects'
import Project from './Project'
import Contact from './Contact'
import LoginPage from './LoginPage'
import ProtectedRoute from './ProtectedRoute'
import Admin from './Admin'
import NotFoundPage from './NotFoundPage'

const Routes = () => (
	<Switch>
		<Route path='/about' component={() => <div />} />
		<ProtectedRoute path='/admin' component={Admin} />
		<Route path='/contact' component={Contact} />
		<Route path='/login' component={LoginPage} />
		<Route path='/projects/:id' component={Project} />
		<Route path='/projects' component={Projects} />
		<Route exact path='/' component={Bio} />
		<Route path='*' component={NotFoundPage} />
	</Switch>
)

export default Routes