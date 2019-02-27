import React from 'react'

import classes from './About.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import Portrait from '../../UI/Portrait/Portrait'

const aboutMe = () => {
	return (
		<main id='about'>
			<CustomHeading
				mainHeading='About '
				secondaryHeading='Me'
				caption='A few things about me...'
			/>
			<div className={classes.AboutInfo}>
				<div className={classes.BioImage}>
					<Portrait />
				</div>

				<div className={classes.Bio}>
					<h3 style={{ color: '#eece1a' }}>BIO</h3>
					<p style={{ color: '#fff' }}>
						Hi, I'm Ioannis, an IT graduate, currently unemployed but looking for
						work as a web developer (frontend, mostly experienced with React).
						Building web apps and websites is my passion and I'm constantly trying
						to learn all the new technologies and trends around web app
						development.
					</p>
				</div>

				<div className={classes.Job + ' ' + classes.Job1}>
					<h3>SPHY | Hellenic Army | Sep 2017-Dec 2017 | Athens</h3>
					<h4>Network/Systems Administrator</h4>
					<p>
						While serving my mandatory military service, I trained as a systems and
						local network administrator of the school. I also provided technical
						and IT support to personnel of the school.
					</p>
				</div>
			</div>
		</main>
	)
}

export default aboutMe
