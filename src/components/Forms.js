import React, { useState } from 'react'

// components
import Input from './Input'

function Forms() {
  // const [forms, setForms] = useState({
  //   firstName: ''
  // })
  const [firstName, setFirstName] = useState('')

  function onChange(event) {
    setFirstName(event.target.value)
  }

  console.log('firstName: ', firstName)
  return (
    <div>
      <Input value={firstName} onChange={onChange} />
    </div>
  )
}

export default Forms
