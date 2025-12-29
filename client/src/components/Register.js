import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice";
import { Link, useNavigate } from "react-router-dom";
import './authpage.css';


function Register({ping,setping}) {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please Register</h2>
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...register, name: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="LastName"
            placeholder="LastName"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, lastname: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, email: e.target.value })
            }
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...register, password: e.target.value })
            }
          />

          <button
            className="btn btn-lg btn-primary btn-block"
             onClick={async () => {
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
                  }}
          >
            Register
          </button>
          

          <h5 style={{marginTop:"30px"}}>
            u already have account <Link to="/login">sign in </Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Register;

