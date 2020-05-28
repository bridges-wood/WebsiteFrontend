import React, { useRef } from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'
import ConfirmRefresh from './ConfirmRefresh'
import { logout } from '../../reducers/loginActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Admin = () => {
const openConfirmation = useRef()
const dispatch = useDispatch()
const history = useHistory()

const handleLogout = () => {
	dispatch(logout())
	history.push('/')
}

return (
	<div>
		<ConfirmRefresh ref={openConfirmation}/>
		<Accordion defaultActiveKey='0'>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant='link' eventKey='0'>
						ANALYTICS
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>
						PLACEHOLDER
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle as={Button} variant='link' eventKey='1'>
						Refresh Projects
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey='1'>
					<Card.Body>
						<Button onClick={() => openConfirmation.current.handleShow()}>Trigger</Button>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
		<Button variant='secondary' onClick={() => handleLogout()}>Logout</Button>
	</div>
)}

export default Admin