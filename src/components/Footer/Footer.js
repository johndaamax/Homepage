import React from 'react'

import classes from './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = params => (
	<footer className={classes.Footer}>
		<p>
			Powered by{' '}
			<FontAwesomeIcon className={classes.Icon} icon={['fab', 'react']} size='lg' />{' '}
			<span>React</span> © 2019
		</p>
	</footer>
)

export default footer
