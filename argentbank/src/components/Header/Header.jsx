import React from 'react';
import "./header.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
          <NavLink to="/">
            <img className='header__img' src={argentBankLogo} alt="bank logo" />
          </NavLink>
           
            <NavLink className="header__signIn" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          
            <div className="header__signOut">
              <i className="fa fa-user-circle"></i>
              <p>Nom</p>
              <NavLink to="/">
                <div className="header__logOut"> 
                  <i className="fa fa-sign-out"></i>
                  <p>Sign Out</p>
                </div>
              </NavLink>
            </div>
          
        </header>
      )
    }
    

export default Header