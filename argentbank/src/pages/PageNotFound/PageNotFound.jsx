import React from "react"
import { NavLink } from "react-router-dom"
import "./pageNotFound.css"

const PageNotFound = () => {

  document.title = "Argent Bank - Error Page"
  
  return (
    <div className="container">
      <h1 className="pageNotFound__h1">Page Not Found</h1>
      <NavLink to={"/signin"} className="pageNotFound__a">
        <p >Please Login </p>
      </NavLink>
    </div>
  )
}

export default PageNotFound