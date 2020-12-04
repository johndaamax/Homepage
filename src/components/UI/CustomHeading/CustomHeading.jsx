import styles from './CustomHeading.module.css';

const CustomHeading = ({ mainHeading, secondaryHeading, caption }) => {
	return (
		<div className={styles.CustomHeading}>
			<h1 className={styles.LgHeading}>
				{mainHeading}
				<span className={styles.SecondaryName}>{secondaryHeading}</span>
			</h1>
			<h2 className={styles.Caption}>{caption}</h2>
		</div>
	)
}

export default CustomHeading
