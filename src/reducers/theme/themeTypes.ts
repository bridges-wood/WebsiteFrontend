import { ThemeName } from "../../types/Theme"

export const SET_THEME = 'SET_THEME'

interface setTheme {
	type: typeof SET_THEME,
	data : {
		theme: ThemeName
	}
}

export type ThemeTypes = setTheme