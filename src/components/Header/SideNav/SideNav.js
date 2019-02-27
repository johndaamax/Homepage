import React from 'react'
import { NavLink } from 'react-router-dom'
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
				<NavLink
					exact
					onClick={props.close}
					to='/'
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					className={classes.NavLink}>
					Home
				</NavLink>
			</li>
			<li className={navItemClasses.join(' ')}>
				<NavLink
					exact
					onClick={props.close}
					to='/about'
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					className={classes.NavLink}>
					About me
				</NavLink>
			</li>
			<li className={navItemClasses.join(' ')}>
				<NavLink
					exact
					onClick={props.close}
					to='/work'
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					className={classes.NavLink}>
					My Work
				</NavLink>
			</li>
			<li className={navItemClasses.join(' ')}>
				<NavLink
					exact
					onClick={props.close}
					to='/contact'
					activeStyle={{
						fontWeight: 'bold',
						color: 'red'
					}}
					className={classes.NavLink}>
					Contact Me
				</NavLink>
			</li>
		</ul>
	)
}

export default sideNav
