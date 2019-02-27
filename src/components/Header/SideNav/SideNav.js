import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SideNav.css'

const sideNav = props => {
	let attachedClasses = [classes.SideNav]
	let navItemClasses = [classes.NavItem]
	if (props.visible) {
		attachedClasses = [classes.SideNav, classes.Show]
		navItemClasses = [classes.NavItem, classes.NavItemShow]
	}

	return (
		<ul className={attachedClasses.join(' ')}>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={props.close} to='/' className={classes.NavLink}>
					Home
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={props.close} to='/about' className={classes.NavLink}>
					About me
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={props.close} to='/work' className={classes.NavLink}>
					My Work
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={props.close} to='/contact' className={classes.NavLink}>
					Contact Me
				</Link>
			</li>
		</ul>
	)
}

export default sideNav
