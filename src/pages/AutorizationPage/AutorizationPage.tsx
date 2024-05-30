import React, { useContext, useState } from "react";
import "./AutorizationPage.scss";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import LogInComponent from "../../components/LogInComponent/LogInComponent";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AutorizationContext";

const AutorizationPage = () => {
  const { setLoginPressed, setSignUpPressed, signUpPressed, loginPressed } =
    useContext(AuthContext);

  // REVIEW If you finally do not use the parameter, better remove it.
  const handleSignUp = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setLoginPressed(false);
    setSignUpPressed(true);
  };
  const handleLogin = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setLoginPressed(true);
    setSignUpPressed(false);
  };

  return (
    <div className="wrapper autorization__wrapper">
      <div className="autorization">
        <div className="container autorization__container">
          <div className="autorization__window">
            <div className="autorization__buttons">
              <a
                onClick={handleSignUp}
                className=" autorization__btn autorization__signup-btn "
              >
                Sign up
              </a>
              <a
                onClick={handleLogin}
                className="autorization__btn autorization__login-btn"
              >
                Log in
              </a>
            </div>
            <div className="autorization__form-block">
              {(signUpPressed && <SignUpComponent />) ||
                (loginPressed && <LogInComponent />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutorizationPage;
