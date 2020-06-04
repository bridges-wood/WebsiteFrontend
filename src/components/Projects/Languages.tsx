import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'
import colors from '../../resources/colors.json'
import styles from './Projects.module.css'


const parseLanguages = (languages: {name: string, bytes: number}[]) => {
	const data: Data = []
	languages.map(language => data.push({
		color: colors.find(e => e.name === language.name).color,
		title: language.name,
		value: language.bytes,
	}))
	return data
}

const Languages = ({languages, className} :
	{ languages: {
		name: string,
		bytes: number
	}[],
	className: string }) => {

	if (languages === null) {
		return null
	}
	return (
		<PieChart
			className={styles[className]}
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
