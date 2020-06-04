import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, RootStateOrAny } from 'react-redux'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { Link } from 'react-router-dom'
import { ThemeName } from '../types/Theme'
import { RootState } from '../store'
import ThemeToggle from './ThemeToggle'
import styles from './Header.module.css'

const Header = () => {
	const name : string = useSelector(( state: RootStateOrAny ) => state.user.loggedInUser.name)
	const theme: ThemeName = useSelector((state : RootState) => state.theme.theme)

	return (
	<Navbar
	className={`${styles.navbar} ${styles[theme]}`}
	expand='sm'
	sticky='top'
	collapseOnSelect
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
				<ThemeToggle />
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