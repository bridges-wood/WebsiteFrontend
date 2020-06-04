import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setTheme } from '../reducers/theme/themeActions'
import { ThemeName } from '../types/Theme'
import { Button } from 'react-bootstrap'

export const ThemeToggle = () => {
	const themeMap : {dark : ThemeName, light : ThemeName} = {
		dark: 'light',
		light: 'dark'
	}

	const theme = useSelector((state: RootState) => state.theme.theme)
	const dispatch = useDispatch()

	const advanceTheme = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
		dispatch(setTheme(themeMap[theme]))
	}

	return (
	<Button onClick={(event: React.MouseEvent<HTMLElement>) => advanceTheme(event)}>{themeMap[theme]}</Button>
	)
}

export default ThemeToggle