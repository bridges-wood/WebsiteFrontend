import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import style from './Contact.module.css'

const Contact = () => {
	const theme = useSelector((state: RootState) => state.theme.theme)
	return (
	<div className={`${style.contact} ${style[theme]}`}>
		<h1>Contact</h1>
		<p>Feel free to reach out to me with one of the options below:
		</p>
	</div>
)}

export default Contact
