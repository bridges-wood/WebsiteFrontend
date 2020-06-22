import React, { useState } from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'
import ConfirmRefresh from './ConfirmRefresh'
import { triggerLogout } from '../../reducers/login/loginActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Admin = () => {
const [visibleConfirm, setConfirmVisibility] = useState(false)
const dispatch = useDispatch()
const history = useHistory()

const toggleVisibility = () => {
	setConfirmVisibility(!visibleConfirm)
}

const handleLogout = () => {
	dispatch(triggerLogout())
	history.push('/')
}

return (
	<div>
		{
			visibleConfirm ? <ConfirmRefresh toggleVisibility={toggleVisibility} /> : null
		}
		<Accordion>
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
						<Button onClick={toggleVisibility}>Trigger</Button>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
		<Button variant='secondary' onClick={handleLogout}>Logout</Button>
	</div>
)}

export default Admin