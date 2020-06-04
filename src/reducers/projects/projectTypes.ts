import { Project } from "../../types/Project"

export const SET_PROJECTS_BEGIN = 'SET_PROJECTS_BEGIN'
export const SET_PROJECTS_SUCCESS = 'SET_PROJECTS_SUCCESS'
export const SET_PROJECTS_FAILURE = 'SET_PROJECTS_FAILURE'

interface projectFetchStarted {
	type: typeof SET_PROJECTS_BEGIN
}

interface projectsFetched {
	type: typeof SET_PROJECTS_SUCCESS,
	data: Project[]
}

interface projectFetchFailure {
	type: typeof SET_PROJECTS_FAILURE,
	data: string
}

export type ProjectActionTypes = projectFetchStarted | projectsFetched | projectFetchFailure