import {
	SET_PROJECTS_BEGIN,
	SET_PROJECTS_SUCCESS,
	SET_PROJECTS_FAILURE,
} from './projectActions'

const initialState = {
	projects: [],
	loading: false,
	error: null,
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_PROJECTS_BEGIN:
		return {
			...state,
			projects: [],
			loading: true,
		}
	case SET_PROJECTS_SUCCESS:
		return {
			...state,
			projects: action.data,
			error: null,
			loading: false,
		}
	case SET_PROJECTS_FAILURE:
		return {
			...state,
			loading: false,
			error: action.data,
			projects: [],
		}
	default:
		return state
	}
}

export default projectReducer
