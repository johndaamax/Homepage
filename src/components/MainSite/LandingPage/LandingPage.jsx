import React from 'react'
import styles from './LandingPage.module.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LandingPage = () => {
	return (
		<main className={styles.LandingPage}>
			<CustomHeading
				mainHeading='Ioannis '
				secondaryHeading='Amaxopoulos'
				caption='Web Developer, Programmer & Motorsport Enthusiast'
			/>
			<h3 className={styles.Welcome}>
				Welcome to my portfolio site! Click on the menu icon in the top right to browse
				around.
			</h3>
			<div className={styles.Icons}>
				<a
					href='https://www.facebook.com/giannis.amaxopoulos.5'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={styles.facebook}
						icon={['fab', 'facebook']}
						size='2x'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/ioannis-amaxopoulos-30b05617b/'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={styles.linkedin}
						icon={['fab', 'linkedin']}
						size='2x'
					/>
				</a>
				<a
					href='https://github.com/johndaamax'
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon
						className={styles.github}
						icon={['fab', 'github']}
						size='2x'
					/>
				</a>
			</div>
		</main>
	)
}

export default LandingPage
