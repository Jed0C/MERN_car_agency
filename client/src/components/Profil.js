import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../JS/userSlice";
import "./profil.css"
import CommandeCard from "./CommandeCard";
import Edituser from "./Edituser";
import { getcommande } from "../JS/commandeSlice";

function Profil({ping,setping}) {
  const user = useSelector((state) => state.user.user);
  const commandes = useSelector((state) => state.commande.commandelist);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
  if (user?._id) {
    dispatch(getcommande());
  }
}, [user, dispatch]);


  return (

    <div className="containerr">
      <div className="main-body">
        <div className="row gutters-sm">
          {/* Left Column */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fstudent-avatar-illustration-user-profile-icon-youth-avatar_118339-4401.jpg%3Fw%3D2000&f=1&nofb=1&ipt=9335383a6fb45152315aac279aa8186f548e470dbd108d111ffed3394b7fc1a0"
                    alt="user"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{user?.lastname}{user?.name}</h4>
                    <p className="text-secondary mb-1">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Info */}
            <div className="card mt-3">
                <div className="card-body">
                {[
                  { label: 'Name', value:  `${user?.name || '-------------------'}` },
                  { label: 'Lastname', value:  `${user?.lastname || '-------------------'}` },
                  { label: 'Email', value: `${user?.email || '-------------------'}` },
                  { label: 'Phone', value:  `${user?.phone || '+216 xx xxx xxx'}` },
                  { label: 'Address', value:  `${user?.address || '-------------------'}` },
                  
                ].map((item, idx) => (
                  <React.Fragment key={idx}>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">{item.label}</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {item.value}
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))}
                <div className="row">
                  <div className="col-sm-12">
                    <Edituser ping={ping} setping={setping}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            {/* <CommandeCard/> */}
             <div className="card mb-3">
                <h2>Car Requestes History</h2>
                <table className="commande-table">
                    <thead>
                      <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th >Status</th>
                        <th >Price</th>
                       <th>From</th>
                        <th>To</th>
                        <th >Operation Date</th>
                        <th>Request Status</th>
                      </tr>
                    </thead>
                    </table>
                  {commandes.filter((commande) => commande.userId === user._id).map((commande) => (
                        <CommandeCard key={commande._id} commande={commande} ping={ping} setping={setping} />)).reverse()}              </div> 
                        
                        
                        
                        {/* *****************for store purchases **********************/}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Profil;

