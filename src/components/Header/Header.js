import React from 'react'
import classes from './Header.css'

import MenuIcon from '../UI/MenuIcon/MenuIcon'
import MenuBranding from './MenuBranding/MenuBranding'
import SideNav from './SideNav/SideNav'

const header = props => {
	let attachedClasses = [classes.Menu]
	if (props.sideVisible) {
		attachedClasses = [classes.Menu, classes.Show]
	}
	return (
		<header className={classes.Header}>
			<div className={classes.NavBar}>
				<MenuIcon toggle={props.toggleSidebar} visible={props.sideVisible} />
			</div>
			<nav className={attachedClasses.join(' ')}>
				<MenuBranding visible={props.sideVisible} />
				<SideNav visible={props.sideVisible} close={props.close} />
			</nav>
		</header>
	)
}

export default header
