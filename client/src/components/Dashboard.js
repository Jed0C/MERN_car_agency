import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CommandeCard from './CommandeCard';
import Productcard from './Productcard'

import { editcommande, getcommande } from '../JS/commandeSlice';
import {  userCurrent } from '../JS/userSlice';
import CarCard from './CarCard';
import Addcar from './Addcar';

const Dashboard = ({ping,setping}) => {

  const commandes = useSelector((state) => state.commande.commandelist);
  const cars=useSelector((state)=>state.car.carlist);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, userList } = useSelector((state) => state.user);

  const [activeSection, setActiveSection] = useState('personal');
  
  // Sample customer data
  const customerData = {
    personalInfo: {
      fullName: "Alexander Reynolds",
      email: "alex.reynolds@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Park Avenue, New York, NY 10022",
      profilePhoto: "./user.png",
      nationalId: "NY-7894561230",
      preferredContact: "Email"
    },
    vehiclePreferences: {
      preferredBrands: ["Mercedes-Benz", "BMW", "Audi"],
      bodyTypes: ["SUV", "Sedan", "Coupe"],
      budgetRange: "$80,000 - $150,000",
      fuelType: "Hybrid",
      transmission: "Automatic"
    },
    purchaseHistory: [
      { id: 1, model: "Mercedes-Benz S-Class", date: "2022-03-15", price: "$124,500", payment: "Credit Card" },
      { id: 2, model: "BMW X7", date: "2021-08-22", price: "$98,200", payment: "Bank Transfer" },
      { id: 3, model: "Audi Q8", date: "2020-11-05", price: "$87,900", payment: "Financing" }
    ],
    testDrives: [
      { id: 1, model: "Porsche Taycan", date: "2023-05-18", rating: 5 },
      { id: 2, model: "Tesla Model S", date: "2023-04-12", rating: 4 },
      { id: 3, model: "Jaguar F-Pace", date: "2023-03-05", rating: 4 }
    ],
    financing: {
      creditScore: 780,
      plan: "Premium Elite Financing",
      status: "Approved",
      emi: "$2,450/month",
      loanAmount: "$120,000"
    }
  };
  
  const totalSpending = customerData.purchaseHistory.reduce((total, purchase) => {
    return total + parseInt(purchase.price.replace(/\D/g, ''));
  }, 0);
  
  const renderSection = () => {
    switch(activeSection) {
      case 'personal':
        return <PersonalInfo data={customerData.personalInfo} />;
      case 'preferences':
        return <Cars data={customerData.vehiclePreferences} cars={cars} ping={ping} setping={setping} />;
      case 'history':
        return <Requests data={customerData.purchaseHistory} totalSpending={totalSpending} commandes={commandes} ping={ping} setping={setping} dispatch={dispatch}/>;
      case 'testdrives':
        return <Customers data={customerData.testDrives} />;
      case 'financing':
        return <Settings data={customerData.financing} />;
      default:
        return <PersonalInfo data={customerData.personalInfo} />;
    }
  };
  
  return (
    <div className="luxury-container">
      <div className="profile-content">
        <div className="sidebar">
          <div className="profile-image">
            <img src={customerData.personalInfo.profilePhoto} alt="Profile" />
          </div>
          <NavItem 
            icon="user" 
            label="Analytics" 
            isActive={activeSection === 'personal'} 
            onClick={() => setActiveSection('personal')} 
          />
          <NavItem 
            icon="history" 
            label="Requests" 
            isActive={activeSection === 'history'} 
            onClick={() => setActiveSection('history')} 
          />
          <NavItem 
            icon="car" 
            label="Cars" 
            isActive={activeSection === 'preferences'} 
            onClick={() => setActiveSection('preferences')} 
          />
          <NavItem 
            icon="steering-wheel" 
            label="Customers" 
            isActive={activeSection === 'testdrives'} 
            onClick={() => setActiveSection('testdrives')} 
          />
          <NavItem 
            icon="credit-card" 
            label="Settings" 
            isActive={activeSection === 'financing'} 
            onClick={() => setActiveSection('financing')} 
          />
        </div>
        
        <div className="main-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="nav-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div>{label}</div>
    </div>
  );
};

const PersonalInfo = ({ data }) => {
  return (
    <div>
      <h2 className="section-title">Analytics</h2>
      <div className="info-grid">
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-user card-icon"></i>
            <span>Basic Details</span>
          </div>
          <div className="info-item">
            <span className="info-label">Full Name:</span>
            <span className="info-value">{data.fullName}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{data.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <span className="info-value">{data.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Contact Method:</span>
            <span className="info-value">{data.preferredContact}</span>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-address-card card-icon"></i>
            <span>Identification</span>
          </div>
          <div className="info-item">
            <span className="info-label">National ID:</span>
            <span className="info-value">{data.nationalId}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Address:</span>
            <span className="info-value">{data.address}</span>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-star card-icon"></i>
            <span>Customer Status</span>
          </div>
          <div className="info-item">
            <span className="info-label">Member Since:</span>
            <span className="info-value">January 2019</span>
          </div>
          <div className="info-item">
            <span className="info-label">Tier:</span>
            <span className="info-value">Platinum Elite</span>
          </div>
          <div className="info-item">
            <span className="info-label">Preferred Sales:</span>
            <span className="info-value">Michael Anderson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cars = ({ data ,ping,setping}) => {
    const cars=useSelector((state)=>state.car.carlist);
  return (
    <div>
        <div className="section-title" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 >Cars</h2>
        <Addcar ping={ping} setping={setping}/>
        </div>

          <div className="info-grid">
            {cars?.map((car)=>
            <Productcard el={car} ping={ping} setping={setping}/> )}
       </div>
    </div>
  );
};

const Requests = ({ data, totalSpending,ping,setping,commandes,dispatch }) => {
  return (
    <div>
      <div className="container">
        <div className='d-flex flex-column'>
          {commandes.slice().reverse().map((commande) => (
              <div  key={commande._id}>
                <CommandeCardD commande={commande} ping={ping} setping={setping} dispatch={dispatch} />
              </div>
            ))}
        </div>
      </div>
      </div>

  );
};

const Customers = ({ data }) => {
  return (
    <>
      <h2 className="section-title">Customers</h2>
      
      <div className="info-grid">
             
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-calendar-alt card-icon"></i>
            <span>Scheduled Test Drives</span>
          </div>
          <div className="info-item">
            <span className="info-label">June 15, 2023</span>
            <span className="info-value">Porsche 911 Carrera</span>
          </div>
          <div className="info-item">
            <span className="info-label">June 22, 2023</span>
            <span className="info-value">Audi e-tron GT</span>
          </div>
        </div>
        </div>
      
      </>
  );
};

const Settings = ({ data }) => {
  return (
    <div>
      <h2 className="section-title">Settings</h2>
      
      <div className="info-grid">
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-chart-line card-icon"></i>
            <span>Credit Information</span>
          </div>
          <div className="info-item">
            <span className="info-label">Credit Score:</span>
            <span className="info-value">{data.creditScore} (Excellent)</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(data.creditScore/850)*100}%` }}></div>
          </div>
          <div className="info-item">
            <span className="info-label">Last Updated:</span>
            <span className="info-value">May 15, 2023</span>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-file-invoice-dollar card-icon"></i>
            <span>Current Financing</span>
          </div>
          <div className="info-item">
            <span className="info-label">Plan:</span>
            <span className="info-value">{data.plan}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Status:</span>
            <span className="info-value" style={{ color: '#10b981' }}>{data.status}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Loan Amount:</span>
            <span className="info-value">{data.loanAmount}</span>
          </div>
        </div>
        
        <div className="info-card">
          <div className="card-title">
            <i className="fas fa-calendar-check card-icon"></i>
            <span>Payment Schedule</span>
          </div>
          <div className="info-item">
            <span className="info-label">EMI:</span>
            <span className="info-value">{data.emi}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Next Payment:</span>
            <span className="info-value">June 15, 2023</span>
          </div>
          <div className="info-item">
            <span className="info-label">Remaining Term:</span>
            <span className="info-value">48 months</span>
          </div>
        </div>
      </div>
      
      <h3 className="sub-section-title">Loan History</h3>
      <div className="info-grid">
        <div className="info-card">
          <div className="info-item">
            <span className="info-label">2022 - Mercedes S-Class:</span>
            <span className="info-value">Fully Paid</span>
          </div>
          <div className="info-item">
            <span className="info-label">2021 - BMW X7:</span>
            <span className="info-value">Fully Paid</span>
          </div>
          <div className="info-item">
            <span className="info-label">2020 - Audi Q8:</span>
            <span className="info-value">Fully Paid</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// commande card in the dashborad
const CommandeCardD = ({commande,ping, setping,dispatch}) => {


  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const [edited, setEdited] = useState({
  ...commande,
  requestStatus: commande.requestStatus || '', 
});

const handleAccept = (commande) => {setEdited((prev) => ({...prev,requestStatus: 'accepted',}));
   dispatch(editcommande({ id: commande._id, edited }));
   setping(ping => !ping);
    handleClose()};

const handleReject = (commande) => {setEdited((prev) => ({...prev,requestStatus: 'rejected',}));
  dispatch(editcommande({ id: commande._id, edited }));
  setping(ping => !ping);
  handleClose()};

// const handleUpdate = (commande) => {
//   dispatch(editcommande({ id: commande._id, edited }));
//   setping(ping => !ping); 
// };

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
    <>
     {show &&<div className="cart-container" >
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

          <button onClick={() => {handleReject(commande)}} className="edit-btn">no</button>
          <button onClick={() => {handleAccept(commande)}} className="delete-btn">ok</button>
         
        </div>
      </div>
    </div>}
      </>
  )};

export default Dashboard;