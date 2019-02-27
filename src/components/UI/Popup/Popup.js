import React from 'react'

import classes from './Popup.css'
import Backdrop from '../Backdrop/Backdrop'

const popup = props => {
	return (
		<>
			<Backdrop show={props.show} clicked={props.closePopup} />
			<div
				onClick={props.closePopup}
				className={classes.Popup}
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show ? '1' : '0'
				}}>
				<img src={props.imgSrc} alt='Project' />
			</div>
		</>
	)
}

export default popup
