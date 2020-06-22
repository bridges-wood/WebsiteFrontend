import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CardDeck } from 'react-bootstrap'
import ProjectSummary from './ProjectSummary'
import Loading from '../Loading/Loading'
import { Project } from '../../types/Project'
import styles from './Projects.module.css'
import { RootState } from '../../store'
import { initializeProjects } from '../../reducers/projects/projectActions'

const Projects = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(initializeProjects())
	}, [dispatch])

	
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
		<div className={styles.container}>
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
