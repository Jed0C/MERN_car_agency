import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

import Profil from "./components/Profil";
import Register from "./components/Register";
import {  getusers, userCurrent } from "./JS/userSlice";
import { getcar } from "./JS/carSlice";
import { getcommande } from "./JS/commandeSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import NavB from "./components/NavB";
import Hero from "./components/Hero";
import Detail from "./components/Detail";
import CarCard from "./components/CarCard";
import CarList from "./components/CarList";
import Commande from "./components/Commande";
import Addcar from "./components/Addcar";
import Dashboard from "./components/Dashboard";
import CommandeCard from "./components/CommandeCard";
import Edituser from "./components/Edituser";
import Editcommande from "./components/Editcommande";
import AdminRoute from "./Routes/AdminRouter";
import AuthPage from "./components/AuthPage";
import Registerr from "./components/Registerr";
import Loginn from "./components/Loginn";
import Foooter from "./components/Foooter";
import Contact from "./components/Contact";




function App() {
  const isAuth = localStorage.getItem("token");

  const [ping, setping] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getcar());
    dispatch(getcommande());
    dispatch(getusers());
  },[ping]);


  return (
    <div className="App">
      <NavB ping={ping} setping={setping}/>
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<AuthPage ping={ping} setping={setping}/>} />
          <Route path="/login" element={<AuthPage ping={ping} setping={setping}/>} />
          <Route path="/cars" element={<CarList ping={ping} setping={setping}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard ping={ping} setping={setping} />} />
        </Routes>

          <Routes element={<PrivateRoute />}>
            <Route path="/profil" element={<Profil ping={ping} setping={setping}/>} />
            <Route path="/car/:id" element={<Detail ping={ping} setping={setping}/>} />
          </Routes>

          
        
      {/* <AuthPage ping={ping} setping={setping}/> */}
      
      
      <Foooter/>
       
       
      
    </div>
  );
}

export default App;
