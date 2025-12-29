import React, { useEffect, useState } from 'react'
import './NavB.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../JS/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function NavB({ping, setping}) {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const isLoggedIn = !!user;

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsLoggedIn(!!token);
  // }, [ping]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
    // setIsLoggedIn(false);
    setping(ping => !ping);
    dispatch(logout());
  };


  return (
    <div>
          <nav className="navbarr navbar-expand-lg px-0 d-flex justify-content-between align-items-center" >
            <div  className="d-flex justify-content-start align-items-center">
                <div>
                    <a className="navbar-brand" href="/">
                    <h1>Avante</h1>
                    </a>
                </div>
                <div>
                    <div className="collapse navbar-collapse " id="mainMenu">
                        <ul className="navbar-nav ml-auto f1">
                            <li><Link to="/">Home</Link></li>
                            {user?.role === "user" && (
                              <li><Link to="/profil">Profile</Link></li>
                            )}
                            
                             {user?.role === "admin" && (
                              <li><Link to="/dashboard">Dashboard</Link></li>
                            )}
                            <li><Link to="/cars">Cars</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {isLoggedIn ? (
                <div className="user-menu">
                  <img src="./avatar.png" alt="avatar" className="avatar" />
                  <span style={{ margin: "0 10px", color: "#fff" }}>{user?.name}</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <div className="auth-links">
                  <li><Link to="/login">log in</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
                </div>
              )}
            {/* <div style={{border:'1px solid blue'}} className="d-flex justify-content-end">
                
                    <a className="navbar-brand" href="/mojo">
                    <h1>Avante</h1>
                    </a>
                
                
                    <a className="navbar-brand" href="/mojo">
                    <h1>Avante</h1>
                    </a>
                
            </div> */}
          </nav>
        {/* /.container */}
    </div>
  )
}

export default NavB