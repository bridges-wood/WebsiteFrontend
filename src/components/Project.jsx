import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import colours from '../resources/colours.json'

const parseLanguages = (languages) => {
	const data = []
	Object.keys(languages).forEach((language) => {
		data.push({
			color: colours[language].color,
			title: language,
			value: languages[language],
		})
	})
	return data
}

const Project = ({ project, loading, error }) => {
	if (loading) {
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}

	if (error) {
		return (
			<div>
				<p>Error...</p>
			</div>
		)
	}
	const data = parseLanguages(project.languages)
	return (
		<PieChart
			data={data}
		/>
	)
}

export default Project
