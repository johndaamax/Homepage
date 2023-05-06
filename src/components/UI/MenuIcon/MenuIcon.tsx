import { useStore } from '@nanostores/react';
import { isMenuVisible } from '../../../store';

import styles from './MenuIcon.module.css';

export default function MenuIcon() {
  // read the store value with the `useStore` hook
  const $isMenuVisible = useStore(isMenuVisible);

  let attachedClasses = [styles.MenuIcon];
  if ($isMenuVisible) {
    attachedClasses = [styles.MenuIcon, styles.Change];
  }

  return (
    <div className={attachedClasses.join(' ')} onClick={() => isMenuVisible.set(!$isMenuVisible)}>
      <div className={styles.Bar1} />
      <div className={styles.Bar2} />
      <div className={styles.Bar3} />
    </div>
  );
}
