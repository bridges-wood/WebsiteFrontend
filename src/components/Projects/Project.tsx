import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Languages from './Languages'
import Loading from '../Loading'
import { Project as ProjectType } from '../../types/Project'


const Project = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	const projects = useSelector((state: RootStateOrAny) => state.projects.projects)
	const error = useSelector((state: RootStateOrAny) => state.projects.error)
	const match : {params : {
		id: string
	}} = useRouteMatch('/projects/:id')
	const project = match
		? projects.find((p : ProjectType) => p.id === Number(match.params.id))
		: null

	if (!project) {
		return (
			<Loading />
		)
	}

	if (error) {
		return (
			<div>
				<p>Error...</p>
			</div>
		)
	}

	return (
		<div>
			<Languages languages={project.languages} style={{ width: '30%' }} />
			<ReactMarkdown source={project.README} />
		</div>
	)
}

export default Project
