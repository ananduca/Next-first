import React from 'react'
import styles from './BlogLayout.module.scss'
export default function BlogLayout ({ children }) {
  return (
    <div className={styles.page}>
      { children }
    </div>
  )
}
