import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchToken } from "../../features/auth";
import "./signIn.css";

const SignIn = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  let localStorage = window.localStorage.user
    ? JSON.parse(window.localStorage.user)
    : { username, password };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let value = { username, password, checked };
    dispatch(fetchToken({ value }));
    navigate("/profile");
  };

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    setUsername(localStorage.username);
    setPassword(localStorage.password);
  }, [localStorage.username, localStorage.password]);
  document.title = "Argent Bank - Login Page";

  return (
    <div className="main">
      <div className="signInContainer">
        <i className="fa fa-user-circle signIn__icon"></i>
        <h1 className="signIn__h1">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="signIn__input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value.trim())}
            />
          </div>
          <div className="signIn__input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
          </div>
          <div className="signIn__checkbox">
            <input onChange={handleCheckbox} type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <input className="signInBtn" type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
