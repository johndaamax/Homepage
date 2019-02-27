import React from 'react'

import classes from './Popup.css'
import Backdrop from '../Backdrop/Backdrop'

const popup = props => {
	let attachedClasses = [classes.Popup]
	if (props.show) {
		attachedClasses = [classes.Popup, classes.Show]
	}
	return (
		<>
			<Backdrop show={props.show} clicked={props.closePopup} />
			<div className={attachedClasses.join(' ')} onClick={props.closePopup}>
				<img src={props.imgSrc} alt='Project' />
			</div>
		</>
	)
}

export default popup
