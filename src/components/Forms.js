import React, { useState } from 'react'

// components
import Input from './Input'

function Forms() {
  // const [forms, setForms] = useState({
  //   firstName: ''
  // })
  const [firstName, setFirstName] = useState('')
  const [form, setForm] = useState({
    learn: "react",
    age: 30
  })

  function onChange(event) {
    setFirstName(event.target.value)
  }

  function onChangeForm(event) {
    const name = event.target.name;
    setForm({
      ...form,
      [name]: event.target.value
    })
  }

  console.log('firstName: ', firstName)
  return (
    <div>
      <Input value={firstName} onChange={onChange} />

      <h4>Multiple Input</h4>
      <input type="text" name="learn" value={form.learn} onChange={onChangeForm} />
      <input type="text" name="age" value={form.age} onChange={onChangeForm} />

    </div>
  )
}

export default Forms
