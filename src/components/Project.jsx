import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PieChart } from 'react-minimal-pie-chart'
import ReactMarkdown from 'react-markdown'
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

const Project = () => {
	const projects = useSelector((state) => state.projects)
	const error = useSelector((state) => state.error)
	const match = useRouteMatch('/projects/:id')
	const project = match
		? projects.find((p) => p.id === Number(match.params.id))
		: null
	console.log('project :>> ', project)

	if (!project) {
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

	return (
		<div>
			<PieChart
				style={{ width: '30%' }}
				animationDuration={1000}
				animate
				data={parseLanguages(project.languages)}
				labelPosition={50}
				lengthAngle={360}
				lineWidth={15}
				paddingAngle={0}
				radius={50}
				rounded
				startAngle={0}
				viewBoxSize={[
					100,
					100,
				]}
			/>
			<ReactMarkdown source={project.README} />
		</div>
	)
}

export default Project
