import React, { useState, useImperativeHandle } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'
import { refreshProjects } from '../../reducers/projectActions'

const ConfirmRefresh = React.forwardRef((props, ref) => {
	const dispatch = useDispatch()
	const [visibleConfirm, setConfirmVisibility] = useState(false)
	const [allowSubmit, setAllowSubmit] = useState(false)

	const handleClose = () => setConfirmVisibility(false)
	const handleShow = () => setConfirmVisibility(true)

	const updateAllowSubmit = (event) => {
		event.preventDefault()
		const confirmation = event.target.value
		if (confirmation === 'refresh'){
			setAllowSubmit(true)
		} else {
			setAllowSubmit(false)
		}
	}

	
	const refresh = (event) => {
		event.preventDefault()
		dispatch(refreshProjects())
		handleClose()
	}

	useImperativeHandle(ref, () => ({
		handleShow
	}))

	return (
		<Modal
		show={visibleConfirm}
		onHide={handleClose}
		size='lg'
		centered>
			<Modal.Header closeButton>
				<Modal.Title>Confirm Refresh</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Please type <b>refresh</b> in the box below to confim refresh.</p>
				<Form onSubmit={refresh}>
					<Form.Control
					name='confirmation'
					type='text'
					onChange={(event) => updateAllowSubmit(event)}
					/>
				<Button id='confimation-button' variant='primary' type='submit' disabled={!allowSubmit}>
					Refresh
				</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
})

export default ConfirmRefresh