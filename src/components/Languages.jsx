/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import PropTypes from 'prop-types'
import colours from '../resources/colours.json'

const parseLanguages = (languages) => {
	const data = []
	Object.keys(languages).map((language) => data.push({
		color: colours[language].color,
		title: language,
		value: languages[language],
	}))
	return data
}

const Languages = ({ languages, style }) => (
	<PieChart
		style={style}
		animationDuration={1000}
		animate
		data={parseLanguages(languages)}
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
)

Languages.propTypes = {
	languages: PropTypes.object.isRequired,
	style: PropTypes.object,
}

Languages.defaultProps = {
	style: {},
}

export default Languages
