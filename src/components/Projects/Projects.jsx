import React from 'react'
import { useSelector } from 'react-redux'
import { CardDeck } from 'react-bootstrap'
import ProjectSummary from './ProjectSummary'
import Loading from '../Loading'

const Projects = () => {
	const loading = useSelector((state) => state.projects.loading)
	const projects = useSelector((state) => state.projects.projects)
	const error = useSelector((state) => state.projects.error)

	if (loading) return (
	<div style={{
		height: window.innerHeight,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}}>
		<Loading />
	</div>
		)

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
			<CardDeck
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'baseline'
			}}>
			{projects.map((project) => {
				return (
					<ProjectSummary
						key={project.id.toString()}
						name={project.name}
						description={project.description}
						id={project.id}
					/>
				)
			})}
			</CardDeck>
		</div>
	)
}

export default Projects
