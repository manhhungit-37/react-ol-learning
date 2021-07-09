import React, { useEffect } from 'react'

function Input({ value, onChange }) {

  useEffect(() => {
    return () => {
      console.log('unmounted')
    }
  })
  return (
    <input type="text" value={value} onChange={onChange} />
  )
}

export default Input
