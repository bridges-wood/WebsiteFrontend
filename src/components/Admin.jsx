import React from 'react'
import { useDispatch } from 'react-redux'
import { refreshProjects } from '../reducers/projectActions'

const Admin = () => {
	const dispatch = useDispatch()

	const refresh = () => {
		dispatch(refreshProjects())
	}
return (
	<div>
		This is the admin component
		<button onClick={refresh}>This is a button</button>
	</div>
)}

export default Admin