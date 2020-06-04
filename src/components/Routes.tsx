import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Projects from './Projects/Projects'
import ProjectType from './Projects/Project'
import Contact from './Contact/Contact'
import LoginPage from './Login/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import Admin from './Admin/Admin'
import NotFoundPage from './NotFoundPage'
import About from './About/About'
import Home from './Home/Home'

const Routes = () => (
	<Switch>
		<Route path='/about' component={About} />
		<ProtectedRoute path='/admin' component={Admin} />
		<Route path='/contact' component={Contact} />
		<Route path='/login' component={LoginPage} />
		<Route path='/projects/:id' component={ProjectType} />
		<Route path='/projects' component={Projects} />
		<Route exact path='/' component={Home} />
		<Route path='*' component={NotFoundPage} />
	</Switch>
)

export default Routes