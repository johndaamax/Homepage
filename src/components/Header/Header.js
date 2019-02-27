import React from 'react'
import classes from './Header.css'

import MenuIcon from '../UI/MenuIcon/MenuIcon'
import MenuBranding from './MenuBranding/MenuBranding'
import SideNav from './SideNav/SideNav'

const header = props => {
	return (
		<header className={classes.Header}>
			<MenuIcon toggle={props.toggleSidebar} visible={props.sideVisible} />
			<MenuBranding visible={props.sideVisible} />
			<SideNav visible={props.sideVisible} close={props.close} />
		</header>
	)
}

export default header
