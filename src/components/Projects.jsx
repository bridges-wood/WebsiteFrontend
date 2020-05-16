import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

const Projects = () => {
	const loading = useSelector((state) => state.loading)
	const projects = useSelector((state) => state.projects)
	const error = useSelector((state) => state.error)
	console.log('projects :>> ', projects)
	console.log('loading :>> ', loading)
	if (loading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div>
				<p>{error}</p>
			</div>
		)
	}

	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{projects.map((project) => (
					<ProjectSummary
						key={project.id.toString()}
						name={project.name}
						description={project.description}
						id={project.id}
					/>
				))}
			</ul>
		</div>
	)
}

export default Projects
