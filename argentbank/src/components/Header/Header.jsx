import React from 'react';
import "./header.css";
import { useDispatch, useSelector } from "react-redux"
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { logout } from '../../slices/authSlice';
import { resetUser } from '../../slices/userSlice';

function Header() {

  let firstname = useSelector((state) => state.user.firstName)
  let logged = useSelector((state) => state.auth.isLoaded)

  const dispatch = useDispatch()
  //when the state status changed change logged to true
  const disconnect = () => {
    dispatch(logout())
    dispatch(resetUser())
  }
  
    return (
        <header>
          <NavLink to="/">
            <img className='header__img' src={argentBankLogo} alt="bank logo" />
          </NavLink>
          {!logged ? (
            <NavLink className="header__signIn" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
            ) : (
            <div className="header__signOut">
              <i className="fa fa-user-circle"></i>
              <NavLink to="/profile"><p>{firstname}</p></NavLink>
              <NavLink to="/">
                <div className="header__logOut" onClick={disconnect}> 
                  <i className="fa fa-sign-out"></i>
                  <p>Sign Out</p>
                </div>
              </NavLink>
            </div>
          )}
        </header>
      )
    }
    

export default Header