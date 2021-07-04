import React, { useState } from 'react'
import clsx from 'clsx'

function Styles() {
  const [age, setAge] = useState(0)
  const [name] = useState('')

  return (
    <div 
      className={clsx(
        age > 18 ? 'adults' : 'children',
        name !== '' && 'hasName'
      )}
    >
      this is add className by state
      <input type="text" onChange={e => setAge(e.target.value)} />
    </div>
  )
}

export default Styles








