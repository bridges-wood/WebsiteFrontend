import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { triggerSet } from '../../reducers/theme/themeActions'
import { ThemeName } from '../../types/Theme'
import styles from './ThemeToggle.module.css'

export const ThemeToggle = () => {
	const themeMap : {dark : ThemeName, light : ThemeName, unloaded: ThemeName} = {
		dark: 'light',
		light: 'dark',
		unloaded: 'light'
	}

	const theme = useSelector((state: RootState) => state.theme.theme)
	const dispatch = useDispatch()

	const advanceTheme = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		dispatch<any>(triggerSet(themeMap[theme]))
	}

	
	
	return (
		<div
		className={`${styles.darkModeToggle} ${styles[theme]}`}
		onClick={(event: React.MouseEvent<HTMLElement>)=> 
		advanceTheme(event)}>
			<div className={`${styles.arc} ${styles[theme]}`}/>
			<div className={`${styles.darc} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.one} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.two} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.three} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.four} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.five} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.six} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.seven} ${styles[theme]}`}/>
			<div className={`${styles.ray} ${styles.eight} ${styles[theme]}`}/>
		</div>
	)
}

export default ThemeToggle