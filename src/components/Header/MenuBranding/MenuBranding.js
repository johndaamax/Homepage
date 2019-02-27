import React from 'react'

import classes from './MenuBranding.css'
import Portrait from '../../UI/Portrait/Portrait'

const menuBranding = props => {
	let attachedClasses = [classes.MenuBranding]
	if (props.visible) {
		attachedClasses = [classes.MenuBranding, classes.Show]
	}
	return (
		<div className={attachedClasses.join(' ')}>
			<Portrait />
		</div>
	)
}

export default menuBranding
