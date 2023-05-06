import React from 'react';
import { useStore } from '@nanostores/react';
import { isMenuVisible } from '../../../store';
import styles from './SideNav.module.css';

export default function SideNav() {
  const $isMenuVisible = useStore(isMenuVisible);
  let attachedClasses = [styles.SideNav];
  let navItemClasses = [styles.NavItem];
  if ($isMenuVisible) {
    attachedClasses = [styles.SideNav, styles.Show];
    navItemClasses = [styles.NavItem, styles.NavItemShow];
  }

  return (
    <ul className={attachedClasses.join(' ')}>
      <li className={navItemClasses.join(' ')}>
        <a onClick={() => isMenuVisible.set(false)} href="/" className={styles.NavLink}>
          Home
        </a>
      </li>
      <li className={navItemClasses.join(' ')}>
        <a onClick={() => isMenuVisible.set(false)} href="/about" className={styles.NavLink}>
          About me
        </a>
      </li>
      <li className={navItemClasses.join(' ')}>
        <a onClick={() => isMenuVisible.set(false)} href="/work" className={styles.NavLink}>
          My Work
        </a>
      </li>
      <li className={navItemClasses.join(' ')}>
        <a onClick={() => isMenuVisible.set(false)} href="/contact" className={styles.NavLink}>
          Contact Me
        </a>
      </li>
    </ul>
  );
}
