import React from 'react'
const spinner = require('../assets/spinner.gif')

export const Spinner = () => {
  console.log(spinner)
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}
