import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import './authpage.css';
import Loginn from "./Loginn";
import Registerr from "./Registerr";

const AuthPage = ({ ping, setping }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";

  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0">
        <div className="carda">
          <div className="login-box">
            <div className="login-snip">
              {/* Radio buttons are optional now, but kept for CSS */}
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked={isLogin}
                readOnly
              />
              <label
                htmlFor="tab-1"
                className="tab"
                onClick={() => navigate("/login")}
              >
                Login
              </label>

              <input
                id="tab-2"
                type="radio"
                name="tab"
                className="sign-up"
                checked={!isLogin}
                readOnly
              />
              <label
                htmlFor="tab-2"
                className="tab"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </label>

              <div className="login-space">
                <div className="login">{isLogin ? <Loginn ping={ping} setping={setping} /> : null}</div>
                <div className="sign-up-form">
                  {!isLogin ? <Registerr ping={ping} setping={setping} /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
