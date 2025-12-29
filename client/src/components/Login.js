import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice";
import './authpage.css';



function Login({ping,setping}) {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <input
            type="text"
            class="form-control"
            name="Password"
            placeholder="Password"
            required=""
            autofocus=""
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />

          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={async () => {
                      try {
                        const res = await dispatch(userlogin(login)); // Wait for login to finish

                        // Check if login succeeded (optional: based on your thunk setup)
                        if (res.payload?.token || res.meta.requestStatus === "fulfilled") {
                          setping(prev => !prev); // ✅ Navbar re-renders now that token is set
                          navigate("/profil");    // ✅ Redirect after login
                        } else {
                          alert("Login failed. Check your credentials.");
                        }
                      } catch (error) {
                        console.error("Login error:", error);
                      }
                    }}
          >
            login
          </button>
          <h5 style={{marginTop:"30px"}}>
            u already have account <Link to="/register">Register now</Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;


// return (
//     <div>
//       <div className="login">
//         <div className="group">
//           <label className="label">Username</label>
//           <input
//             type="text"
//             class="input"
//             name="username"
//             placeholder="Email Address"
//             required=""
//             autofocus=""
//             onChange={(e) => setlogin({ ...login, email: e.target.value })}
//           />
//           </div>
//           <div className="group">
//             <label className="label">Password</label>
//           <input
//             type="text"
//             class="form-control"
//             name="Password"
//             placeholder="Password"
//             required=""
//             autofocus=""
//             onChange={(e) => setlogin({ ...login, password: e.target.value })}
//           />
//           </div>

//           <div className="group">
//         <input type="checkbox" className="check" defaultChecked />
//         <label><span className="icon"></span> Keep me Signed in</label>
//           </div>
          
          
//           <button
//             className="btn btn-lg btn-primary btn-block"
//             onClick={async () => {
//                       try {
//                         const res = await dispatch(userlogin(login)); // Wait for login to finish

//                         // Check if login succeeded (optional: based on your thunk setup)
//                         if (res.payload?.token || res.meta.requestStatus === "fulfilled") {
//                           setping(prev => !prev); // ✅ Navbar re-renders now that token is set
//                           navigate("/profil");    // ✅ Redirect after login
//                         } else {
//                           alert("Login failed. Check your credentials.");
//                         }
//                       } catch (error) {
//                         console.error("Login error:", error);
//                       }
//                     }}
//           >
//             login
//           </button>
//           <h5 style={{marginTop:"30px"}}>
//             u already have account <Link to="/register">Register now</Link>{" "}
//           </h5>
        
//       </div>
//     </div>
//   );
// }

// export default Login;
