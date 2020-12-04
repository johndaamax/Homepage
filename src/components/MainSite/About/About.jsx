import React from 'react'

import styles from './About.module.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import Portrait from '../../UI/Portrait/Portrait'
import JobCard from '../../UI/JobCard/JobCard'

import { jobs } from '../../../data/jobs';

const AboutMe = () => {
	return (
		<main className={styles.About}>
			<CustomHeading
				mainHeading='About '
				secondaryHeading='Me'
				caption='A few things about me...'
			/>
			<div className={styles.GridContainer}>
				<div className={styles.BioImage}>
					<Portrait />
				</div>

				<div className={styles.Bio}>
					<h3 style={{ color: '#eece1a' }}>BIO</h3>
					<p style={{ color: '#fff' }}>
						Hi, I'm Ioannis, an IT graduate, currently unemployed but looking for
						work as a web developer (frontend, mostly experienced with React).
						Building web apps and websites is my passion and I'm constantly trying
						to learn all the new technologies and trends around web app
						development.
					</p>
				</div>
			</div>
			<h2>Professional Experience</h2>
			{jobs.map(job => (
				<JobCard
					title={job.title}
					company={job.company}
					fromTo={job.fromTo}
					type={job.type}
					description={job.description}
				/>
			))}
		</main>
	)
}

export default AboutMe
