import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import colors from '../../resources/colors.json'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'

const parseLanguages = (languages: {name: string, bytes: number}[]) => {
	const data: Data = []
	languages.map(language => data.push({
		color: colors.find(e => e.name === language.name).color,
		title: language.name,
		value: language.bytes,
	}))
	return data
}

const Languages = ({languages, style} : { languages: { name: string, bytes: number }[], style: object }) => {
	if (languages === null) {
		return null
	}
	return (
		<PieChart
			style={style}
			animationDuration={1000}
			animate
			data={parseLanguages(languages)}
			labelPosition={50}
			lengthAngle={180}
			lineWidth={15}
			paddingAngle={0}
			radius={50}
			rounded
			startAngle={180}
			viewBoxSize={[
				100,
				55,
			]}
		/>
	)
}

export default Languages
