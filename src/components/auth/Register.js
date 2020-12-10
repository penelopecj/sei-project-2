import React from 'react'

// import useForm from '../../util/useForm'
// import { useHistory } from 'react-router-dom'


// This is the home page

function Register() {
  
  const handleSubmit = (event) => {
    event.preventDefault() 
    console.log('You registered a new account!')
  }
  
  return (
    <div className="columns section">
      <div className="column is-half">
        <figure className="image is-1by1">
        </figure>
      </div>
      <div className="column is-half">
        <h3 className="title is-3">Register Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="field">
              <label className="label">Username</label>
              <input className="input" type="text" name="username" placeholder="Username" />
            </div>
            <div className="field">
              <label className="label">Email</label>
              <input className="input" type="text" name="email" placeholder="Email"/>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <input className="input" type="password" name="password" placeholder="Password"/>
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <input className="input" type="password" name="passwordConfirmation" placeholder="Password Confirmation"/>
            </div>
            <div className="buttons">
              <button className="button is-info">Continue</button>
            </div>


          </div>
        </form>
      </div>
    </div>
  )
}

export default Register