import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="text-center">
        <h1 className={styles.headerTitle}>
          Currency Exchange
          <span className={styles.currencyIcon}>💰</span>
        </h1>
      </div>
      <p className={`text-center ${styles.headerSubtitle}`}>
        Get the latest currency exchange rates instantly
      </p>
    </div>
  )
}

export default Header
