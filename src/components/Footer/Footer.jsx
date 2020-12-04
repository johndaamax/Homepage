import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
	<footer className={styles.Footer}>
		<p>
			Powered by{' '}
			<FontAwesomeIcon className={styles.Icon} icon={['fab', 'react']} size='lg' />{' '}
			<span>React</span> © 2020
		</p>
	</footer>
)

export default Footer
