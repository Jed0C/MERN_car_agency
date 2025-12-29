import React from 'react';
// import './commandecardgpt.css';
import './css1.css'

import Editcommande from './Editcommande'
import { deletecommande } from '../JS/commandeSlice';
import { useDispatch } from 'react-redux';

const CommandeCard = ({commande,ping, setping}) => {

  console.log("commandecard ping",ping)
  const dispatch = useDispatch();


const handleDelete = (commande) => {
  dispatch(deletecommande(commande._id));
  setping(ping => !ping); 
};


  const renderStatus = (status) => {
    switch (status) {
      case 'accepted':
        return <span className="status accepted">✔  Accepted</span>;
      case 'pending':
        return <span className="status pending">⏳  Pending</span>;
      case 'rejected':
        return <span className="status rejected">❌  Rejected</span>;
      default:
        return null;
    }
  };

  return (
     <div className="cart-container">
      <div className="cart-item horizontal-card">
        
        {/* Data fields */}
        <div className="field fixed manufacturer">{commande?.manufacturer || "-"}</div>
        <div className="field fixed model">{commande?.model || "-"}</div>
        <div className="field fixed status">
          <span className={`status-badge ${commande.status === "Rent" ? "rent" : "sell"}`}>
            {commande.status}
          </span>
        </div>
        <div className="field fixed price">${commande?.price?.toLocaleString() || "0"}</div>
        <div className="field fixed rental-date">
          {commande?.status === "Rent" ? new Date(commande?.rentalPeriod?.startDate).toLocaleDateString() : "-"}
        </div>
        <div className="field fixed rental-date">
          {commande?.status === "Rent" ? new Date(commande?.rentalPeriod?.endDate).toLocaleDateString() : "-"}
        </div>
        <div className="field fixed operation-date">
          {commande?.operationDate ? new Date(commande?.operationDate).toLocaleDateString() : "-"}
        </div>
        <div className="field fixed request-status">{renderStatus(commande?.requestStatus) || "-"}</div>

        {/* Buttons (initially hidden) */}
        <div className="commande-actions">
          {/* <button onClick={() => handleEdit(commande)} className="edit-btn">Edit</button> */}
          
            <Editcommande commande={commande} ping={ping} setping={setping}/>
          <button onClick={() => handleDelete(commande)} className="delete-btn">Delete</button>
        </div>
      </div>
</div>


   
    
  );
};



export default CommandeCard;
