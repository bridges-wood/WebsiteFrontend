import React from 'react'
import GradientRect, { Gradient } from '../Symbols/GradientRect'
import styles from './Home.module.css'
import { ThemeName } from '../../types/Theme'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const BlueToGreen: Gradient = {
	start: '#42ddf5',
	end: '#12e652',
}

const YellowToOrange: Gradient = {
	start: '#f0e335',
	end: '#e68a22'
}

const Grey: Gradient = {
	start: '#555555',
	end: '#555555'
}

const PurpleToRed = {
	start: '#b517d1',
	end: '#e31717'
}

const Bio = () => {
	const theme: ThemeName = useSelector((state: RootState) => state.theme.theme)

	return (
	<div className={styles.bio}>
		<div>
			<div>
				<GradientRect {...{...BlueToGreen, length: 90}}/>
				<GradientRect {...{...YellowToOrange, length: 50}}/>
				<GradientRect {...{...Grey, length: 12}}/>
			</div>
			<div>
				<GradientRect {...{...PurpleToRed, length: 100}}/>
			</div>
			<div>
				<GradientRect {...{...YellowToOrange, length: 40}}/>
				<GradientRect {...{...Grey, length: 12}}/>
				<GradientRect {...{...Grey, length: 30}}/>
				<GradientRect {...{...YellowToOrange, length: 70}}/>
			</div>
			<div className={styles.container}>
				<h1 className={`${styles.name} ${styles[theme]}`}>Max Wood</h1>
				<p className={`${styles.desc} ${styles[theme]}`}>{
				window.innerWidth > 768 
				? 'Full-time student, self-teaching fullstack web development and game development on the side.'
				: 'Full-time student and autodidact.'}</p>
			</div>
			<div>
				<GradientRect {...{...Grey, length: 100}}/>
				<GradientRect {...{...BlueToGreen, length: 50}}/>
			</div>
			<div>
				<GradientRect {...{...BlueToGreen, length: 60}}/>
				<GradientRect {...{...YellowToOrange, length: 35}}/>
				<GradientRect {...{...BlueToGreen, length: 150}}/>
			</div>
			<div className={styles.blankLine}/>
			<div>
			<GradientRect {...{...PurpleToRed, length: 70}}/>
			</div>
		</div>
	</div>
)}

export default Bio
