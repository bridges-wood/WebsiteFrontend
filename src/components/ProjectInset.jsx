import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import present from '../present.json'
import Languages from './Languages'

const ProjectInset = ({ id }) => {
	let image = null
	if (id in present) {
		image = `../images/${present[id]}`
	}

	const project = useSelector((state) => state.projects.projects.find((p) => p.id === id))

	return (
		<div style={{
			minWidth: '20%',
			maxWidth: '30%',
			margin: '15px',
		}}
		>
			<img
				src={image}
				alt={`${project.name} icon`}
				style={{
					maxWidth: '100%',
				}}
			/>
			<div style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
			>
				<Languages
					languages={project.languages}
					style={{
						maxWidth: '50%',
						height: '20%',
					}}
				/>
				<div>
					<h3>{project.mainLanguage}</h3>
					<Link to={`/projects/${id}`}>See more</Link>
				</div>
			</div>
		</div>
	)
}

ProjectInset.propTypes = {
	id: PropTypes.number.isRequired,
}

export default ProjectInset
