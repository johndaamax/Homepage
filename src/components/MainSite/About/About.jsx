import CustomHeading from '../../UI/CustomHeading/CustomHeading';
import Portrait from '../../UI/Portrait/Portrait';
import JobCard from '../../UI/JobCard/JobCard';
import ContainerWithTitle from '../../UI/ContainerWithTitle/ContainerWithTitle';

import { jobs } from '../../../data/jobs';
import { bio } from '../../../data/bio';

import styles from './About.module.css';

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
					<p className={styles.Bio}>{bio}</p>
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
