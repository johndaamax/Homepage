import React from 'react'

import classes from './MyWork.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'
import Project from '../MyWork/Project/Project'
import Popup from '../../UI/Popup/Popup'
import { projects as ProjectData } from './projects'
import Footer from '../../Footer/Footer'

class myWork extends React.Component {
	state = {
		showPopup: false,
		selectedImage: null
	}

	showPopupHandler = image => {
		this.setState(prevState => {
			return { showPopup: !prevState.showPopup, selectedImage: image }
		})
	}

	closePopupHandler = () => {
		this.setState({ showPopup: false })
	}

	render() {
		const projects = ProjectData.map(project => (
			<Project
				key={project.id}
				title={project.title}
				description={project.description}
				imgSrc={project.image}
				link={project.link}
				showPopup={() => this.showPopupHandler(project.image)}
			/>
		))

		return (
			<main className={classes.MyWork}>
				<Popup
					show={this.state.showPopup}
					closePopup={this.closePopupHandler}
					imgSrc={this.state.selectedImage}
				/>
				<CustomHeading
					mainHeading='My '
					secondaryHeading='Work'
					caption='Check out some of my projects...'
				/>
				<div className={classes.Projects}>{projects}</div>
				<Footer />
			</main>
		)
	}
}

export default myWork
