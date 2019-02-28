import React from 'react'
import classes from './LandingPage.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const landingPage = () => {
	return (
		<main className={classes.LandingPage}>
			<CustomHeading
				mainHeading='Ioannis '
				secondaryHeading='Amaxopoulos'
				caption='Web Developer, Programmer & Motorsport Enthusiast'
			/>
			<h3 className={classes.Welcome}>
				Welcome to my portfolio site! Click on the menu icon in the top right to browse
				around.
			</h3>
			<div className={classes.Icons}>
				<a
					href='https://www.facebook.com/giannis.amaxopoulos.5'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={classes.facebook}
						icon={['fab', 'facebook']}
						size='2x'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/ioannis-amaxopoulos-30b05617b/'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={classes.linkedin}
						icon={['fab', 'linkedin']}
						size='2x'
					/>
				</a>
				<a
					href='https://github.com/johndaamax'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={classes.github}
						icon={['fab', 'github']}
						size='2x'
					/>
				</a>
			</div>
		</main>
	)
}

export default landingPage
