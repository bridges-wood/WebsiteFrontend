import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProjects } from './reducers/projects/projectActions'
import { continueSession } from './reducers/login/loginActions'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'
import Notification from './components/Notification'
import { retrieveTheme } from './reducers/theme/themeActions'
import { ThemeName } from './types/Theme'
import { RootState } from './store'
import styles from './App.module.css'


const App = () => {
	const theme: ThemeName = useSelector((state : RootState) => state.theme.theme)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	useEffect(() => {
		if(window.localStorage.getItem('user')) {
			dispatch(continueSession())
		}
	}, [dispatch])

	useEffect(() => {
		if(window.localStorage.getItem('theme')) {
			dispatch(retrieveTheme())
		}
	}, [dispatch])

	return (
		<div className={`${styles.container} ${styles[theme]}`}>
			<Header />
			<Notification />
			<Routes />
			<Footer />
		</div>
		
	)
}

export default App
