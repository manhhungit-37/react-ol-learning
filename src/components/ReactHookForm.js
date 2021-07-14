import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

import useScreenWidth from '../hooks/useScreenWidth';

function ReactHookForm() {
  const isSmalScreen = useScreenWidth();
  const { register,handleSubmit, formState: { errors } } = useForm();

  function onHandleSubmit(data) {
    console.log('onHandeSubmit: ', data)
  }
  
  useEffect(() => {
    console.log('onHandeSubmit: ')
  }, [])

  return (
    <form className="react-hook-from" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex">
          <div className="input-half-container">
            <input 
            type="text" 
            placeholder="Username"
            {...register("username", {
              required: "Please enter your user name",
              minLength: {
                value: 6,
                message: "Your user name is must be more than 6 characters"
              }
            })} />
            {errors.username && <div className="error-input">{errors.username.message}</div>}
          </div>
          <div className="input-half-container">
            <input 
            type="text" 
            placeholder="Email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
                message: "Your input value is not an email"
              }
            })} />
            {errors.email && <div className="error-input">{errors.email.message}</div>}
          </div>
        </div>
        <div className="flex">
          <div className="input-half-container">
            <input 
            type="text" 
            placeholder="First Name"
            {...register("firstname", {
              required: "Please enter your first name",
              minLength: {
                value: 6,
                message: "Your first name is must be more than 6 characters"
              }
            })} />
            {errors.firstname && <div className="error-input">{errors.firstname.message}</div>}
          </div>
          <div className="input-half-container">
            <input 
            type="text" 
            placeholder="Last Name"
            {...register("lastname", {
              required: "Please enter your last name",
              minLength: {
                value: 6,
                message: "Your last name is must be more than 6 characters"
              }
            })} />
            {errors.lastname && <div className="error-input">{errors.lastname.message}</div>}
          </div>
        </div>
        <div className="flex">
          <div className="input-partthree-container">
            <input 
            type="text" 
            placeholder="City"
            {...register("city", {
              required: "Please enter your city",
            })} />
            {errors.city && <div className="error-input">{errors.city.message}</div>}
          </div>
          <div className="input-partthree-container">
            <input 
            type="text" 
            placeholder="Country"
            {...register("country", {
              required: "Please enter your country",
            })} />
            {errors.country && <div className="error-input">{errors.country.message}</div>}
          </div>
          <div className="input-partthree-container">
            <input 
            type="text" 
            placeholder="Post Code"
            {...register("postcode", {
              required: "Please enter your post code",
            })} />
            {errors.postcode && <div className="error-input">{errors.postcode.message}</div>}
          </div>
        </div>
        <button type="submit">Update {isSmalScreen ? 'small' : 'large'}</button>
    </form>
  )
}

export default ReactHookForm
