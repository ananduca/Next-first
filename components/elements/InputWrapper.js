import React from 'react'
import styles from './InputWrapper.module.scss'

export default function InputWrapper({ children }) {
  return (
    <div className={styles.inputWrapper}>
      { children }
    </div>
  )
}
