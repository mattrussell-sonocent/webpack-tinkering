import React, { useState } from 'react'

export const StatefulButton = () => {
  const [state, setState] = useState('🐧')
  return <button onClick={() => setState((s) => s + '🐧')}>{state}</button>
}
