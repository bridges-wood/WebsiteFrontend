import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { CardDeck } from 'react-bootstrap'
import ProjectSummary from './ProjectSummary'
import Loading from '../Loading'
import { Project } from '../../types/Project'

const Projects = () => {
	const {loading, projects, error} : { loading: boolean, projects: Project[], error: Error} = useSelector((state: RootStateOrAny) => state.projects)

	console.log('loading', loading)
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
					key={project.id}
					id={project.id}/>
				)
			})}
			</CardDeck>
		</div>
	)
}

export default Projects
