import React from 'react'

import styles from './MenuBranding.module.css'
import Portrait from '../../UI/Portrait/Portrait'

const MenuBranding = ({ visible }) => {
	let attachedClasses = [styles.MenuBranding]
	if (visible) {
		attachedClasses = [styles.MenuBranding, styles.Show]
	}
	return (
		<div className={attachedClasses.join(' ')}>
			<Portrait />
		</div>
	)
}

export default MenuBranding
