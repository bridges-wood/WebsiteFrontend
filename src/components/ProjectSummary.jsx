import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProjectIcon from './ProjectIcon'

const parentStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',
}


const ProjectSummary = ({
	name, description, id, left,
}) => {
	const descStyle = {
		order: left ? -1 : 1,
	}

	return (
		<div style={parentStyle}>
			<div style={descStyle}>
				<h2>{name}</h2>
				<p>{description}</p>
				<Link to={`/projects/${id}`}>Link</Link>

			</div>
			<ProjectIcon />
		</div>
	)
}

ProjectSummary.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.number,
	left: PropTypes.bool,
}

ProjectSummary.defaultProps = {
	name: 'Name not found',
	description: 'Description not found',
	id: null,
	left: true,
}

export default ProjectSummary
