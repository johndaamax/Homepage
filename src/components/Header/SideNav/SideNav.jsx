import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideNav.module.css'

const SideNav = ({ visible, close }) => {
	let attachedClasses = [styles.SideNav]
	let navItemClasses = [styles.NavItem]
	if (visible) {
		attachedClasses = [styles.SideNav, styles.Show]
		navItemClasses = [styles.NavItem, styles.NavItemShow]
	}

	return (
		<ul className={attachedClasses.join(' ')}>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={close} to='/' className={styles.NavLink}>
					Home
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={close} to='/about' className={styles.NavLink}>
					About me
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={close} to='/work' className={styles.NavLink}>
					My Work
				</Link>
			</li>
			<li className={navItemClasses.join(' ')}>
				<Link onClick={close} to='/contact' className={styles.NavLink}>
					Contact Me
				</Link>
			</li>
		</ul>
	)
}

export default SideNav
