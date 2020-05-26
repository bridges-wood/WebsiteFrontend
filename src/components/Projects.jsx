import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'
import Loading from './Loading'

const Projects = () => {
	const loading = useSelector((state) => state.projects.loading)
	const projects = useSelector((state) => state.projects.projects)
	const error = useSelector((state) => state.projects.error)

	if (loading) return ( <Loading /> )

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
