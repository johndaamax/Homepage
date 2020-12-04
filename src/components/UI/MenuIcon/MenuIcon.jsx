import styles from './MenuIcon.module.css'

const MenuIcon = ({ visible, toggle }) => {
	let attachedClasses = [styles.MenuIcon]
	if (visible) {
		attachedClasses = [styles.MenuIcon, styles.Change]
	}

	return (
		<div className={attachedClasses.join(' ')} onClick={toggle}>
			<div className={styles.Bar1} />
			<div className={styles.Bar2} />
			<div className={styles.Bar3} />
		</div>
	)
}
export default MenuIcon
