import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

it('should work', () => {
  expect(1 + 1).toEqual(2)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
