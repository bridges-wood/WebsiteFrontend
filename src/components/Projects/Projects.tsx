import React from 'react'
import { useSelector } from 'react-redux'
import { CardDeck } from 'react-bootstrap'
import ProjectSummary from './ProjectSummary'
import Loading from '../Loading/Loading'
import { Project } from '../../types/Project'
import styles from './Projects.module.css'
import { RootState } from '../../store'

const Projects = () => {
	const {loading, projects, error} = useSelector((state: RootState) => state.projects)
	const theme = useSelector((state: RootState) => state.theme.theme)

	if (loading) return (
		<div className={styles.loading}>
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
			<h1 className={`${styles.header} ${styles[theme]}`}>Projects</h1>
			<CardDeck className={styles.projects}>
			{projects.map((project: Project) => (
					<ProjectSummary 
					key={project.id}
					id={project.id}/>
				)
			)}
			</CardDeck>
		</div>
	)
}

export default Projects
