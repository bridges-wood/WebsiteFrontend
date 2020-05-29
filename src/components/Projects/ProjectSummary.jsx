import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Languages from './Languages'
import { LinkContainer } from 'react-router-bootstrap'

const ProjectSummary = ({ id }) => {
	const project = useSelector((state) => state.projects.projects.find((p) => p.id === id))

	return (
		<Card
		style={{
			flexBasis: '30%',
			maxWidth: '100%',
			minWidth: '30%',
			marginBottom: '20px'
		}}>
			<Card.Img
			variant='top'
			src={project.metadata.repoImage} />
			<Card.Body>
				<Card.Title>
					{project.name}
				</Card.Title>
				<Card.Text
				style={{
					height: '2rem'
				}}>
						{project.description}
				</Card.Text>
			</Card.Body>
			<Card.Body
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-evenly'
			}}>
			<Languages
					languages={project.languages}
					style={{
						maxWidth: '50%',
						paddingRight: '10px'
					}}
				/>
			<h2>
				{project.mainLanguage}
			</h2>
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

ProjectSummary.propTypes = {
	id: PropTypes.number.isRequired,
}

export default ProjectSummary
