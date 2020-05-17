import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

const Projects = () => {
	const loading = useSelector((state) => state.loading)
	const projects = useSelector((state) => state.projects)
	const error = useSelector((state) => state.error)

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

	let left = true
	return (
		<div>
			<h1>Projects</h1>
			{projects.map((project) => {
				left = !left
				return (
					<ProjectSummary
						key={project.id.toString()}
						name={project.name}
						description={project.description}
						id={project.id}
						left={left}
					/>
				)
			})}
		</div>
	)
}

export default Projects
