import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProjectSummary = ({ name, description, id }) => (
	<li>
		<h2>{name}</h2>
		<p>{description}</p>
		<Link to={`/projects/${id}`}>Link</Link>
	</li>
)

ProjectSummary.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.number,
}

ProjectSummary.defaultProps = {
	name: 'Name not found',
	description: 'Description not found',
	id: null,
}

export default ProjectSummary
