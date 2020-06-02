import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, RootStateOrAny } from 'react-redux'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { Link } from 'react-router-dom'

const Header = () => {
	const name : string = useSelector(( state: RootStateOrAny ) => state.user.loggedInUser.name)

	return (
	<Navbar
	bg="light"
	expand="sm"
	sticky='top'
	>
		<Navbar.Brand>
			<LinkContainer to ='/'>
				<NavLink>Max Wood</NavLink>
			</LinkContainer>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">
				<LinkContainer to='/projects'>
					<NavLink>Projects</NavLink>
				</LinkContainer>
				<LinkContainer to='/about'>
					<NavLink>About</NavLink>
				</LinkContainer>
				<LinkContainer to='/contact'>
					<NavLink>Contact</NavLink>
				</LinkContainer>
			</Nav>
  		</Navbar.Collapse>
		{name ?
		<NavbarCollapse className='justify-content-end'>
			<Navbar.Text>
				Signed in as: <Link to='/login'>{name}</Link>
			</Navbar.Text>
		</NavbarCollapse>
		: null}
</Navbar>
)}

export default Header