import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Languages from './Languages'
import Loading from '../Loading'


const Project = () => {

	useEffect(() => {
		window.scrollTo(0,0)
	}, [])

	const projects = useSelector((state) => state.projects.projects)
	const error = useSelector((state) => state.projects.error)
	const match = useRouteMatch('/projects/:id')
	const project = match
		? projects.find((p) => p.id === Number(match.params.id))
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
