import projectService from '../services/projects'

export const INIT_PROJECTS_BEGIN = 'INIT_PROJECTS_BEGIN'
export const INIT_PROJECTS_SUCCESS = 'INIT_PROJECTS_SUCCESS'
export const INIT_PROJECTS_FAILURE = 'INIT_PROJECTS_FAILURE'

export const initProjectsBegin = () => ({
	type: INIT_PROJECTS_BEGIN,
})

export const initProjectsSuccess = (projects) => ({
	type: INIT_PROJECTS_SUCCESS,
	data: projects,
})

export const initProjectsFailure = (error) => ({
	type: INIT_PROJECTS_FAILURE,
	data: error.message,
})

export const initializeProjects = () => async (dispatch) => {
	dispatch(initProjectsBegin())
	try {
		const projects = await projectService.getAllRepos()
		console.log('projects :>> ', projects)
		dispatch(initProjectsSuccess(projects))
	} catch (error) {
		dispatch(initProjectsFailure(error))
	}
}
