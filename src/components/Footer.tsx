import React from 'react'

const iconStyle = {
	width: '20px',
	margin: '5px'
}

const Footer = () => (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center'
	}}>
		
		<a
		href='https://github.com/bridges-wood'
		style={iconStyle} >
			<img
			src='icons/github.svg'
			alt='Github' />
		</a>
		<a
		href='https://www.linkedin.com/in/max-wood-181140182/'
		style={iconStyle}>
			<img
			src='/icons/linkedin.svg'
			alt='Linkedin'/>
		</a>
		<a 
		href='mailto:bridges.wood@gmail.com'
		style={iconStyle}>
			<img
			src='/icons/gmail.svg'
			alt='Email me'/>
		</a>
	</div>
)

export default Footer
