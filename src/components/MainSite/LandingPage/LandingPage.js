import React from 'react'
import classes from './LandingPage.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const landingPage = () => {
	return (
		<main className={classes.Home}>
			<CustomHeading
				mainHeading='Ioannis '
				secondaryHeading='Amaxopoulos'
				caption='Web Developer, Programmer & Motorsport Enthusiast'
			/>
			<h3 className={classes.SmHeading}>Welcome to my portfolio site</h3>
			<div className={classes.Icons}>
				<a
					href='https://www.facebook.com/giannis.amaxopoulos.5'
					className={classes.facebook}>
					<FontAwesomeIcon icon='facebook' />
				</a>
				<a
					href='https://www.linkedin.com/in/ioannis-amaxopoulos-30b05617b/'
					className={classes.linkedin}>
					<FontAwesomeIcon icon='linkedin' />
				</a>
				<a href='https://github.com/johndaamax' className={classes.github}>
					<FontAwesomeIcon icon='github' />
				</a>
			</div>
		</main>
	)
}

export default landingPage
