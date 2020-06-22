import { Dispatch } from 'redux'
import {
	SET_THEME,
	ThemeTypes
} from './themeTypes'
import { ThemeName } from '../../types/Theme'

export const setTheme = (theme: ThemeName) : ThemeTypes => ({
	type: SET_THEME,
	data: { theme }
})

export const retrieveTheme = () => {
	return (dispatch : Dispatch) => {
		const theme: ThemeName = JSON.parse(localStorage.getItem('theme'))
		dispatch(setTheme(theme))		
	}
}

export const triggerSet = (theme: ThemeName) => {
	localStorage.setItem('theme', JSON.stringify(theme))
	return (dispatch : Dispatch) => {
		dispatch(setTheme(theme))
	}
}

export const getSystemColorScheme = () => {
	return (dispatch : Dispatch) => {
		const prefersDark = window
		.matchMedia('prefers-color-scheme: dark')
		.matches
		if ( prefersDark ) {
			dispatch(setTheme('dark'))
		} else {
			dispatch(setTheme('light'))
		}
	}
}