import React, { useState } from 'react';


function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    email: "",
    gender: "male",
    status: "pending",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    setIsSubmitted(true);
    const errorList = Object.keys(form).filter(element => !form[element]);
    if (errorList.length > 0) return;
    alert(Object.values(form));
  }

  console.log(isSubmitted);

  return (
    <div>
      <h3>Register</h3>
      <form className="register-form" onSubmit={handleForm}>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" onChange={event => setForm({...form, firstName: event.target.value})}  />
        {isSubmitted === true && form.firstName === "" && <div className="danger">Enter your first name</div>}
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" onChange={event => setForm({...form, lastName: event.target.value})} />
        {isSubmitted === true && form.lastName === "" && <div className="danger">Enter your last name</div>}
        <label>Gender:</label>
        <span>         
          <input type="radio" name="gender" id="male" value="male" defaultChecked onChange={e => setForm({...form, gender: e.target.value})}/>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" onChange={e => setForm({...form, gender: e.target.value})} />
          <label htmlFor="female">Female</label>
        </span>
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" cols="10" rows="2" onChange={event => setForm({...form, bio: event.target.value})}></textarea>
        {isSubmitted === true && form.bio === "" && <div className="danger">Enter your Bio</div>}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" onChange={event => setForm({...form, email: event.target.value})} />
        {isSubmitted === true && form.email === "" && <div className="danger">Enter your Email</div>}
        <label htmlFor="status">Status:</label>
        <span>         
          <input type="radio" name="status" id="pending" value="pending" onChange={event => setForm({...form, status: event.target.value})} defaultChecked/>
          <label htmlFor="pending">Pending</label>
          <input type="radio" name="status" id="complete" onChange={event => setForm({...form, status: event.target.value})} value="complete" />
          <label htmlFor="complete">Complete</label>
        </span>
        <label htmlFor="password">PassWord</label>
        <input type="text" id="password" onChange={event => setForm({...form, password: event.target.value})}/>
        {isSubmitted === true && form.password === "" && <div className="danger">Enter your Password</div>}
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="text" id="confirm-password" onChange={event => setForm({...form, confirmPassword: event.target.value})}/>
        {isSubmitted === true && form.password !== form.confirmPassword && <div className="danger">The entered passwords do not match. Try again.</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;