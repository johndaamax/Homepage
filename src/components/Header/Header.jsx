import { useState } from 'react'
import styles from './Header.module.css';

import MenuIcon from '../UI/MenuIcon/MenuIcon'
import MenuBranding from './MenuBranding/MenuBranding'
import SideNav from './SideNav/SideNav'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	let attachedClasses = [styles.Menu]
	if (showMenu) {
		attachedClasses = [styles.Menu, styles.Show]
	}
	return (
		<header className={styles.Header}>
			<div className={styles.NavBar}>
				<MenuIcon visible={showMenu} toggle={() => setShowMenu(prev => !prev)} />
			</div>
			<nav className={attachedClasses.join(' ')}>
				<MenuBranding visible={showMenu} />
				<SideNav visible={showMenu} close={() => setShowMenu(false)} />
			</nav>
		</header>
	)
}

export default Header
