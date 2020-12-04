import React from 'react'

import styles from './About.module.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import Portrait from '../../UI/Portrait/Portrait'
import JobCard from '../../UI/JobCard/JobCard'
import ContainerWithTitle from '../../UI/ContainerWithTitle/ContainerWithTitle'

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
				<ContainerWithTitle title='Bio'>
					<p className={styles.Bio}>
						Hi, I'm Ioannis, an IT graduate that
						Building web apps and websites is my passion and I'm constantly trying
						to learn all the new technologies and trends around web app
						development.
					</p>
				</ContainerWithTitle>
			</div>
			<ContainerWithTitle title='Professional Experience'>
				{jobs.reverse().map(job => (
					<JobCard
						title={job.title}
						company={job.company}
						fromTo={job.fromTo}
						type={job.type}
						description={job.description}
					/>
				))}
			</ContainerWithTitle>
		</main>
	)
}

export default AboutMe
