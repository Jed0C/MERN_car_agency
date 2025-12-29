import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userlogin } from "../JS/userSlice";
import { useNavigate, Link } from 'react-router-dom';
import './authpage.css';

const Loginn = ({ping,setping}) => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await dispatch(userlogin(login));
      if (res.payload?.token || res.meta.requestStatus === 'fulfilled') {
        setping(prev => !prev);      // Re-render on successful login
        navigate('/profil');         // Redirect to profile
      } else {
        alert('Login failed. Check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

// const handleLogin = async () => {
//   try {
//     const res = await dispatch(userlogin(login));

//     console.log("LOGIN RESPONSE:", res);

//     if (res.meta.requestStatus === "fulfilled" && res.payload?.token) {
//       setping((prev) => !prev);
//       navigate("/profil");
//       return;
//     }
//     else{

//     const errorMessage =
//       typeof res.payload?.message === "string"
//         ? res.payload
//         : res.payload || "Login failed. Check your credentials.";
//     alert(errorMessage);}

//   } catch (error) {
//     console.error("Unexpected login error:", error);
//     alert("An unexpected error occurred.");
//   }
// };





  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 className="form-signin-heading">Please login</h2>

        <div className="group">
          <label className="label">Email</label>
          <input
            type="text"
            className="input"
            placeholder="Enter your email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
        </div>

        <div className="group">
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Enter your password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>

        <div className="group">
          <input type="checkbox" className="check" defaultChecked />
          <label>
            <span className="icon"></span> Keep me Signed in
          </label>
        </div>

        <div className="group">
          <button
            type="submit"
            className="button"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>

        <div className="hr"></div>

        <div className="foot">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="foot">
    
        <h5 style={{ marginTop: '30px' }}>
          Don't have an account? <label onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
            Already Member?
          </label>
        </h5>
        </div>
      </form>
    </div>
  );
};

export default Loginn;
