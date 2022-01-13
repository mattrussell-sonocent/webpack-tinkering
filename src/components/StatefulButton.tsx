import React, { useState } from 'react'
import styles from './StatefulButton.module.sass'

export const StatefulButton = () => {
  const [state, setState] = useState('🐧')
  return (
    <button className={styles.statefulButton} onClick={() => setState((s) => s + '🐧')}>
      {state}
    </button>
  )
}
