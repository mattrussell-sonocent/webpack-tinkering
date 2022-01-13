import React, { useState } from 'react'
import './StatefulButton.sass'

export const StatefulButton = () => {
  const [state, setState] = useState('🐧')
  return <button onClick={() => setState((s) => s + '🐧')}>{state}</button>
}
