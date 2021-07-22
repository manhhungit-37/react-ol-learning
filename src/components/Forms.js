import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import clsx from 'clsx'

// components
import Input from './Input'

function Forms() {
  const location = useLocation();

  console.log('location froms: ', location)
  // const [forms, setForms] = useState({
  //   firstName: ''
  // })
  const [firstName, setFirstName] = useState('')
  const [form, setForm] = useState({
    learn: "",
    age: 0
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
  console.log('mutiple input: ', form)

  return (
    // <div  className={firstName && 'forms'}>
    <div 
      className={clsx(
        firstName && 'forms',
        form.age > 0 && 'age'
      )}
    >
      <Input value={firstName} onChange={onChange} />

      <h4>Multiple Input</h4>
      <input type="text" name="learn" value={form.learn} onChange={onChangeForm} />
      <input type="text" name="age" value={form.age} onChange={onChangeForm} />

    </div>
  )
}

export default Forms
