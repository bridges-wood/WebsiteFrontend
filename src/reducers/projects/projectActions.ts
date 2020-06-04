import { Dispatch } from 'redux'
import { Project } from '../../types/Project'
import {
	SET_PROJECTS_BEGIN,
	SET_PROJECTS_SUCCESS,
	SET_PROJECTS_FAILURE,
	ProjectActionTypes
} from './projectTypes'
import projectService from '../../services/projects'
import { notify } from '../notification/notificationActions'

export const setProjectsBegin = (): ProjectActionTypes => ({
	type: SET_PROJECTS_BEGIN,
})

export const setProjectsSuccess = (projects: Project[]): ProjectActionTypes => ({
	type: SET_PROJECTS_SUCCESS,
	data: projects,
})

export const setProjectsFailure = (error: Error): ProjectActionTypes => ({
	type: SET_PROJECTS_FAILURE,
	data: error.message,
})

export const initializeProjects = () => async (dispatch: Dispatch) => {
	dispatch(setProjectsBegin())
	try {
		const projects: Project[] = await projectService.getAll(false)
		dispatch(setProjectsSuccess(projects))
	} catch (error) {
		dispatch(setProjectsFailure(error))
	}
}

export const refreshProjects = () => async (dispatch: Dispatch) => {
	dispatch(setProjectsBegin())
	try {
		const projects = await(projectService.getAll(true))
		dispatch(setProjectsSuccess(projects))
		dispatch<any>(notify('Successfully refreshed projects.', 'success'))
	} catch (error) {
		dispatch(setProjectsFailure(error))
		dispatch<any>(notify(`Failed to refresh projects due to: \n ${error}`, 'danger'))
	}
}
