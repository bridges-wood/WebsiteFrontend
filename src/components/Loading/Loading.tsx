import React from 'react'
import CircleLoader from 'react-spinners/CircleLoader'
import { ThemeName } from '../../types/Theme'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Loading = () => {
	const theme: ThemeName = useSelector((state : RootState) => state.theme.theme)
	return (
		<CircleLoader loading color={theme !== 'dark' ? '#000': '#fff'} size={150}>
			<span className='sr-only'>Loading...</span>
		</CircleLoader>
)}

export default Loading