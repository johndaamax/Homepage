import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Project.module.css';

const Project = ({ title, description, imgSrc, showPopup, link }) => {
	return (
		<div className={styles.Project}>
			<h3 className={styles.Title}>{title}</h3>
			<p className={styles.Description}>{description}</p>
			<div className="imageContainer">
				<img src={imgSrc} alt='Project' onClick={showPopup} />
			</div>

			<a
				href={link}
				className={styles.BtnDark}
				target='_blank'
				rel='noopener noreferrer'>
				<FontAwesomeIcon icon={['fab', 'github']} /> Github
			</a>
		</div>
	)
}

export default Project
