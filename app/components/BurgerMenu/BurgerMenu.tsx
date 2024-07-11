import React from 'react'

import styles from './burgerMenu.module.css'

const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  )
}

export default BurgerMenu