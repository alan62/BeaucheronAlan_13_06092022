import React from "react"
import "./signIn.css"

const SignIn = () => {
  
  document.title = "Argent Bank - Login Page"

  return (
    <div className="main">
      <div className="signInContainer">
        <i className="fa fa-user-circle signIn__icon"></i>
        <h1 className="signIn__h1">Sign In</h1>
        <form className="signIn__form">
          <div className="signIn__input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
            />
          </div>
          <div className="signIn__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            />
          </div>
          <div className="signIn__checkbox">
            <input  type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>

          <input className="signInBtn" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default SignIn