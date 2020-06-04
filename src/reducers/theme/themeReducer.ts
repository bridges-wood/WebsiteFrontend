import {
	SET_THEME,
	ThemeTypes
} from './themeTypes'
import { ThemeName } from '../../types/Theme'

const initialState : { theme: ThemeName } = {
	theme: 'dark'
}

const themeReducer = (state = initialState, action: ThemeTypes) => {
	switch (action.type) {
		case SET_THEME:
			return {
				theme: action.data.theme
			}
		default:
			return state
	}
}

export default themeReducer