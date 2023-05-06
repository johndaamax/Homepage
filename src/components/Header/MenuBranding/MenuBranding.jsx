import React from 'react';
import { useStore } from '@nanostores/react';
import { isMenuVisible } from '../../../store';

import styles from './MenuBranding.module.css';

export default function MenuBranding() {
  const $isMenuVisible = useStore(isMenuVisible);

  let attachedClasses = [styles.MenuBranding];
  if ($isMenuVisible) {
    attachedClasses = [styles.MenuBranding, styles.Show];
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <div className={styles.Portrait} />
    </div>
  );
}
