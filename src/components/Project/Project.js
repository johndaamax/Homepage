import React from 'react'

import classes from './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const project = props => {
	return (
		<div className={classes.Project}>
			<h3 className={classes.Title}>{props.title}</h3>
			<p className={classes.Description}>{props.description}</p>
			<img src={props.imgSrc} alt='Project' onClick={props.showPopup} />

			<a href={props.link} className={classes.BtnDark}>
				<FontAwesomeIcon icon='github' />
			</a>
		</div>
	)
}

export default project
