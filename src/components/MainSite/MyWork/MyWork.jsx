import { useState } from 'react';

import CustomHeading from '../../UI/CustomHeading/CustomHeading';
import ProjectCard from '../../UI/ProjectCard/ProjectCard';
import Popup from '../../UI/Popup/Popup';
import { projects } from '../../../data/projects';

import styles from './MyWork.module.css';

const MyWork = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const showPopupHandler = image => {
		setShowPopup(prevState => !prevState.showPopup);
		setSelectedImage(image);
	}

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
			<div className={styles.Projects}>
				{projects.slice(0).reverse().map(project => (
					<ProjectCard
						key={project.id}
						project={project}
						showPopup={() => showPopupHandler(project.image)}
					/>
				))}
			</div>
		</main>
	)
}

export default MyWork
