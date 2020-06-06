import React, { useState, useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import { NavLink } from 'react-router-dom'
import { ThemeName } from '../../types/Theme'
import { RootState } from '../../store'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth)
	const name : string = useSelector(( state: RootState ) => state.user.loggedInUser.name)
	const theme: ThemeName = useSelector((state : RootState) => state.theme.theme)
	const linkClass: string = `${styles.pageLink} ${styles[theme]}`
	const linkActive: string = `${styles.pageLink} ${styles[theme]} ${styles.active}`


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
				<NavLink to='/'>
					<img className={styles.brand} src='/images/Logo.png'/>
				</NavLink>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse>
				<Nav className="mr-auto">
					<NavLink to='/projects' className={linkClass} activeClassName={linkActive}>
						Projects
					</NavLink>
					<NavLink to='/about' className={linkClass} activeClassName={linkActive}>
						About
					</NavLink>
					<NavLink to='/contact' className={linkClass} activeClassName={linkActive}>
						Contact
					</NavLink>
				</Nav>
				{name ? 
				<>{576 > width || width > 864 ? 
					<Navbar.Text bsPrefix={`${styles.text} ${styles[theme]}`}>
						{name ? <span>Signed in as: </span> : null}
						<NavLink to='/login' 
						className={linkClass}
						activeClassName={linkActive}>
							{name}
						</NavLink>
					</Navbar.Text>
				: 
					<NavLink to='/login' 
						className={linkClass}
						activeClassName={linkActive}>
							Admin
						</NavLink> 
				}</> : null}
				{width < 576 ? <div className={styles.nightModeNav}><ThemeToggle /></div> : null}
	  		</Navbar.Collapse>
			{name ?
			<NavbarCollapse bsPrefix={styles.secondary} className={styles[theme]}>
					
			</NavbarCollapse>
			: null}
			{width >= 576 ? <ThemeToggle /> : null}
		</Navbar>
	</div>
)}

export default Header