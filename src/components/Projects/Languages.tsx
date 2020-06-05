import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { Data } from 'react-minimal-pie-chart/types/commonTypes'
import colors from '../../resources/colors.json'
import styles from './Projects.module.css'

export const findColor = (languageName: string) => {
	return colors.find(e => e.name === languageName).color
} 

export const parseLanguages = (languages: {name: string, bytes: number}[]) => {
	const data: Data = []
	languages.map(language => data.push({
		color: findColor(language.name),
		title: language.name,
		value: language.bytes,
	}))
	return data
}

const Languages = ({languages, className, circle} :
	{ languages: {
		name: string,
		bytes: number
	}[],
	className: string,
	circle?: boolean }) => {

	if (languages === null) {
		return null
	}
	return (
		<PieChart
			className={styles[className]}
			animationDuration={1500}
			animate
			data={parseLanguages(languages)}
			lengthAngle={circle ? 360 : 180}
			lineWidth={15}
			paddingAngle={0}
			radius={50}
			rounded
			startAngle={180}
			viewBoxSize={[
				100,
				circle ? 100 : 55,
			]}
		/>
	)
}

export default Languages
