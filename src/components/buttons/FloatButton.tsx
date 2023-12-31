
'use client'

import styles from './styles/FloatButton.module.scss'

export function FloatButton({onClick, title}: any) {
  return (
    <button type="button" className={styles.floatButton} >{title}</button>
  );
}

