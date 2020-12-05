import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, showPopup }) => {
	return (
		<div>
			<h3 className={styles.Title}>{project.title}</h3>
			<p className={styles.Description}>{project.description}</p>
			<div className={styles.ImageContainer}>
				<img src={project.image} alt='Project' onClick={showPopup} />
			</div>
			<div className={styles.Links}>
				<a
					href={project.link}
					className={styles.BtnDark}
					target='_blank'
					rel='noopener noreferrer'>
					<FontAwesomeIcon icon={['fab', 'github']} /> Github Repository
			</a>
				{project.isDeployed &&
					<a
						href={project.isDeployed.link}
						className={styles.BtnDark}
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={['fab', 'internet-explorer']} /> Live Demo
				</a>
				}
			</div>

		</div>
	)
}

export default ProjectCard
