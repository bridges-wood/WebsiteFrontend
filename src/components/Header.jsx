import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => (
	<Navbar bg="light" expand="sm">
		<Navbar.Brand>
			<LinkContainer to ='/'>
				<NavLink>Portfolio</NavLink>
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
		</Nav>
  	</Navbar.Collapse>
</Navbar>
)

export default Header