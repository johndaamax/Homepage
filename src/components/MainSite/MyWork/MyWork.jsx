import { useState } from 'react';

import CustomHeading from '../../UI/CustomHeading/CustomHeading';
import Project from './Project/Project';
import Popup from '../../UI/Popup/Popup';
import { projects as ProjectData } from './projects';

import styles from './MyWork.module.css';

const MyWork = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const showPopupHandler = image => {
		setShowPopup(prevState => !prevState.showPopup);
		setSelectedImage(image);
	}
	const projects = ProjectData.map(project => (
		<Project
			key={project.id}
			title={project.title}
			description={project.description}
			imgSrc={project.image}
			link={project.link}
			showPopup={() => showPopupHandler(project.image)}
		/>
	))

	return (
		<main className={styles.MyWork}>
			<Popup
				show={showPopup}
				closePopup={() => setShowPopup(false)}
				imgSrc={selectedImage}
			/>
			<CustomHeading
				mainHeading='My '
				secondaryHeading='Work'
				caption='Check out some of my projects...'
			/>
			<div className={styles.Projects}>{projects}</div>
		</main>
	)
}

export default MyWork
