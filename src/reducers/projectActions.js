import projectService from '../services/projects'
import { notify } from './notificationActions'

export const SET_PROJECTS_BEGIN = 'SET_PROJECTS_BEGIN'
export const SET_PROJECTS_SUCCESS = 'SET_PROJECTS_SUCCESS'
export const SET_PROJECTS_FAILURE = 'SET_PROJECTS_FAILURE'

export const setProjectsBegin = () => ({
	type: SET_PROJECTS_BEGIN,
})

export const setProjectsSuccess = (projects) => ({
	type: SET_PROJECTS_SUCCESS,
	data: projects,
})

export const setProjectsFailure = (error) => ({
	type: SET_PROJECTS_FAILURE,
	data: error.message,
})

export const initializeProjects = () => async (dispatch) => {
	dispatch(setProjectsBegin())
	try {
		const projects = await projectService.getAll()
		dispatch(setProjectsSuccess(projects))
	} catch (error) {
		dispatch(setProjectsFailure(error))
	}
}

export const refreshProjects = () => async (dispatch) => {
	dispatch(setProjectsBegin())
	try {
		const projects = await(projectService.getAll(true))
		dispatch(setProjectsSuccess(projects))
		dispatch(notify('Successfully refreshed projects.', 'success'))
	} catch (error) {
		dispatch(setProjectsFailure(error))
		dispatch(notify(`Failed to refresh projects due to: \n ${error}`, 'danger'))
	}
}
