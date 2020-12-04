import Backdrop from '../Backdrop/Backdrop';
import styles from './Popup.module.css';

const Popup = ({ show, imgSrc, closePopup }) => {
	let attachedClasses = [styles.Popup]
	if (show) {
		attachedClasses = [styles.Popup, styles.Show]
	}
	return (
		<>
			<Backdrop show={show} clicked={closePopup} />
			<div className={attachedClasses.join(' ')} onClick={closePopup}>
				<img src={imgSrc} alt='Project' />
			</div>
		</>
	)
}

export default Popup
