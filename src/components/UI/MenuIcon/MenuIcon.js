import React from 'react'
import classes from './MenuIcon.css'

const menuIcon = props => {
	let attachedClasses = [classes.MenuIcon]
	if (props.visible) {
		attachedClasses = [classes.MenuIcon, classes.Change]
	}

	return (
		<div className={attachedClasses.join(' ')} onClick={props.toggle}>
			<div className={classes.Bar1} />
			<div className={classes.Bar2} />
			<div className={classes.Bar3} />
		</div>
	)
}
export default menuIcon
