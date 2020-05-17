import {
	INIT_PROJECTS_BEGIN,
	INIT_PROJECTS_SUCCESS,
	INIT_PROJECTS_FAILURE,
} from './projectActions'

const initialState = {
	projects: [],
	loading: false,
	error: null,
}

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
	case INIT_PROJECTS_BEGIN:
		return {
			...state,
			loading: true,
		}
	case INIT_PROJECTS_SUCCESS:
		return {
			...state,
			projects: action.data,
			loading: false,
		}
	case INIT_PROJECTS_FAILURE:
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
