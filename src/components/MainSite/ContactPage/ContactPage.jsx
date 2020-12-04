import styles from './ContactPage.module.css'
import CustomHeading from '../../UI/CustomHeading/CustomHeading'

const ContactPage = () => (
	<main className={styles.ContactPage}>
		<CustomHeading
			mainHeading='Contact '
			secondaryHeading='Me'
			caption='This is how you can reach me...'
		/>
		<div className={styles.Box}>
			<div>
				<span className={styles.Text}>Email: </span> ia.uoistud@gmail.com
			</div>
			<div>
				<span className={styles.Text}>Phone: </span> (+30) 6941524452
			</div>
			<div>
				<span className={styles.Text}>Location: </span> Brussels, Belgium
			</div>
		</div>
	</main>
)

export default ContactPage
