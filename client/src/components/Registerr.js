import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice"; // Adjust path if needed
import { useNavigate } from "react-router-dom";

const Registerr = ({ping,setping}) => {
  const [register, setRegister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async () => {
    // if (register.password !== register.confirmPassword) {
    //   alert("Passwords do not match.");
    //   return;
    // }

    try {
      const res = await dispatch(userRegister(register));
      if (res.meta.requestStatus === "fulfilled") {
        setping(prev => !prev);
        navigate("/profil");
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="sign-up-form">
      <div className="group">
        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="Enter your first name"
          value={register.name}
          onChange={(e) => setRegister({ ...register, name: e.target.value })}
        />
      </div>

      <div className="group">
        <label className="label">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="Enter your last name"
          value={register.lastname}
          onChange={(e) => setRegister({ ...register, lastname: e.target.value })}
        />
      </div>

      <div className="group">
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="Enter your email address"
          value={register.email}
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />
      </div>

      <div className="group">
        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Create your password"
          value={register.password}
          onChange={(e) => setRegister({ ...register, password: e.target.value })}
        />
      </div>


      <div className="group">
        <input
          type="submit"
          className="button"
          value="Sign Up"
          onClick={handleRegister}
        />
      </div>

      <div className="hr"></div>
      <div className="foot">
        <label onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
            Already Member?
        </label>
      </div>
    </div>
  );
};

export default Registerr;
