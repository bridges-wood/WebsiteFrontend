import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import ProjectInset from './ProjectInset'

const ProjectSummary = ({ id, left }) => {
	const project = useSelector((state) => state.projects.projects.find((p) => p.id === id))

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'space-between',
			width: 'auto',
			height: 'auto',
			padding: '20px',
			outline: '5px solid black',
			margin: '15px',
		}}
		>
			<div style={{
				order: left ? -1 : 1,
				width: 'auto',
			}}
			>
				<h2>{project.name}</h2>
				<p>{project.description}</p>
			</div>
			<ProjectInset id={id} />
		</div>
	)
}

ProjectSummary.propTypes = {
	id: PropTypes.number.isRequired,
	left: PropTypes.bool,
}

ProjectSummary.defaultProps = {
	left: true,
}

export default ProjectSummary
