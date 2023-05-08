import { useStore } from '@nanostores/react';
import MenuBranding from '../MenuBranding/MenuBranding';
import SideNav from '../SideNav/SideNav';
import { isMenuVisible } from '../../store';

import styles from './Menu.module.css';

export default function Menu() {
  const $isMenuVisible = useStore(isMenuVisible);

  let attachedClasses = [styles.Menu];
  if ($isMenuVisible) {
    attachedClasses = [styles.Menu, styles.Show];
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <MenuBranding />
      <SideNav />
    </div>
  );
}
