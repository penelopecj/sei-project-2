import React from 'react'
import monster from '../../images/cookie-monster.png'

// This is the home page

function Register() {
  return (
    <div className="columns section">
      <div className="column is-half">
        <figure className="image is-1by1">
          <img src={monster} alt="cookie monster" />
        </figure>
      </div>
      <div>
        <form>
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


          </div>
        </form>
      </div>
    </div>
  )
}

export default Register