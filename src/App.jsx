import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeProjects } from './reducers/projectActions'
import { continueSession } from './reducers/loginActions'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'


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
		<div className='container'>
			<Header />
			<Routes />
			<Footer />
		</div>
	)
}

export default App
