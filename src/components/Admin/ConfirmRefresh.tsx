import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'
import { refreshProjects } from '../../reducers/projects/projectActions'

export interface visibilityHandle {
	toggleVisibility(): void
}

const ConfirmRefresh = ({ toggleVisibility }: visibilityHandle ) => {
	const dispatch = useDispatch()
	
	const [allowSubmit, setAllowSubmit] = useState(false)



	const updateAllowSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		const confirmation = event.target.value
		if (confirmation === 'refresh'){
			setAllowSubmit(true)
		} else {
			setAllowSubmit(false)
		}
	}
	
	const refresh = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		dispatch(refreshProjects())
		toggleVisibility()
	}

	return (
		<Modal
		show={true}
		onHide={toggleVisibility}
		size='lg'
		centered>
			<Modal.Header closeButton>
				<Modal.Title>Confirm Refresh</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Please type <b>refresh</b> in the box below to confirm refresh.</p>
				<Form onSubmit={refresh}>
					<Form.Control
					name='confirmation'
					type='text'
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateAllowSubmit(event)}
					/>
				<Button id='confirmation-button' variant='primary' type='submit' disabled={!allowSubmit}>
					Refresh
				</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default ConfirmRefresh