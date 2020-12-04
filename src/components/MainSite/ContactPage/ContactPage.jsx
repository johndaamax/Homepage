import styles from './ContactPage.module.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'

const ContactPage = () => (
	<main>
		<CustomHeading
			mainHeading='Contact '
			secondaryHeading='Me'
			caption='This is how you can reach me...'
		/>
		<div className={styles.InfoContainer}>
			<div className={styles.InfoBox}>
				<span className={styles.Text}>Email: </span> ia.uoistud@gmail.com
			</div>
			<div className={styles.InfoBox}>
				<span className={styles.Text}>Phone: </span> (+30) 6941524452
			</div>
			<div className={styles.InfoBox}>
				<span className={styles.Text}>Location: </span> Brussels, Belgium
			</div>
		</div>
	</main>
)

export default ContactPage
