import {
	SET_PROJECTS_BEGIN,
	SET_PROJECTS_SUCCESS,
	SET_PROJECTS_FAILURE,
	ProjectActionTypes
} from './projectTypes'
import { Project } from '../types/Project'

const initialState: { projects: Project[] | [], loading: boolean, error: string | null } = {
	projects: [],
	loading: true,
	error: null
}

const projectReducer = (state = initialState, action: ProjectActionTypes) => {
	switch (action.type) {
	case SET_PROJECTS_BEGIN:
		return {
			...state,
			projects: [],
			loading: true,
		}
	case SET_PROJECTS_SUCCESS:
		return {
			projects: action.data,
			loading: false,
			error: null
		}
	case SET_PROJECTS_FAILURE:
		return {
			projects: initialState.projects,
			loading: false,
			error: action.data
		}
	default:
		return state
	}
}

export default projectReducer
