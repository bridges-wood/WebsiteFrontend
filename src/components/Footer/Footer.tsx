import React from 'react'
import styles from './Footer.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Footer = () => {
	const theme = useSelector((state: RootState) => state.theme.theme)

	return (
	<div className={styles.footer}>
		<a
		href='https://github.com/bridges-wood'
		className={`${styles.link} ${styles[theme]}`}>
			<img
			src='/icons/github.svg'
			alt='Github'
			className={`${styles.icon} ${styles[theme]}`}/>
		</a>
		<a
		href='https://www.linkedin.com/in/max-wood-181140182/'
		className={`${styles.link} ${styles[theme]}`}>
			<img
			src='/icons/linkedin.svg' 
			alt='Linkedin'
			className={`${styles.icon} ${styles[theme]}`}/>
		</a>
		<a 
		href='mailto:bridges.wood@gmail.com'
		className={`${styles.link} ${styles[theme]}`}>
			<img
			src='/icons/gmail.svg'
			alt='Email me'
			className={`${styles.icon} ${styles[theme]}`}/>
		</a>
	</div>
)}

export default Footer
