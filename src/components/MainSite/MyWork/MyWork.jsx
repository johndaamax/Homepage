import { useState } from 'react';

import CustomHeading from '../../UI/CustomHeading/CustomHeading';
import Project from './Project/Project';
import Popup from '../../UI/Popup/Popup';
import { projects } from './projects';

import styles from './MyWork.module.css';

const MyWork = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	console.log(projects)

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
				{projects.reverse().map(project => (
					<Project
						key={project.id}
						title={project.title}
						description={project.description}
						imgSrc={project.image}
						link={project.link}
						showPopup={() => showPopupHandler(project.image)}
					/>
				))}</div>
		</main>
	)
}

export default MyWork
