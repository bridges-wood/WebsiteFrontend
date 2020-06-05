import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, RootStateOrAny } from 'react-redux'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { Link } from 'react-router-dom'
import { ThemeName } from '../../types/Theme'
import { RootState } from '../../store'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const name : string = useSelector(( state: RootStateOrAny ) => state.user.loggedInUser.name)
	const theme: ThemeName = useSelector((state : RootState) => state.theme.theme)

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [width])

	return (
	<div>
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
			<Navbar.Collapse>
				<Nav className="mr-auto">
					<LinkContainer to='/projects'>
						<NavLink bsPrefix={styles.pageLink} className={`${styles[theme]}`}>
							Projects
						</NavLink>
					</LinkContainer>
					<LinkContainer to='/about'>
						<NavLink className={`${styles.pageLink} ${styles[theme]}`}>
							About
						</NavLink>
					</LinkContainer>
					<LinkContainer to='/contact'>
						<NavLink className={`${styles.pageLink} ${styles[theme]}`}>
							Contact
						</NavLink>
					</LinkContainer>
				</Nav>
			{width < 576 ? <div className={styles.nightModeNav}><ThemeToggle /></div> : null}
	  		</Navbar.Collapse>
			{name ?
			<NavbarCollapse className='justify-content-end'>
				<Navbar.Text>
					Signed in as: <Link to='/login'>{name}</Link>
				</Navbar.Text>
			</NavbarCollapse>
			: null}
			{width >= 576 ? <ThemeToggle /> : null}
		</Navbar>
	</div>
)}

export default Header