import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { findColor } from './Languages'
import { Project } from '../../types/Project'
import styles from './Projects.module.css'
import { RootState } from '../../store'

const ProjectSummary = ({ id } : { id: number }) => {
	const project = useSelector((state: RootState) => state.projects.projects.find((p: Project) => p.id === id))
	const theme = useSelector((state : RootState) => state.theme.theme)

	return (
		<Card className={`${styles.projectSummary} ${styles[theme]}`}>
			<div
			className={`${styles.mainLanguage} ${styles[theme]}`}
			style={{backgroundColor: findColor(project.mainLanguage)}}>
				{project.mainLanguage}
			</div>
			<Card.Img
			variant='top'
			src={project.metadata.repoImage}
			className={styles.projectImage}/>
			<Card.Body>
				<Card.Title bsPrefix={`${styles.projectTitle} ${styles[theme]}`}>
					{project.name}
				</Card.Title>
				<Card.Text className={`${styles.projectDescription} ${styles[theme]}`}>
					{project.description}
				</Card.Text>
			</Card.Body>
			<Card.Body>
				<LinkContainer to ={`/projects/${id}`}>
					<Card.Link>See more</Card.Link>
				</LinkContainer>
				<Card.Link href={project.url}>Get the code</Card.Link>
			</Card.Body>
		</Card>
	)
}

export default ProjectSummary
