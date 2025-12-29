import React, { useEffect, useState } from 'react'
import './carDetail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addcommande } from '../JS/commandeSlice';
import Editcar from './Editcar';

function Detail({ping,setping}) {
    
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const cars=useSelector((state)=>state.car.carlist);
  const car = cars.filter((el) => String(el._id) === String(id))[0];
  const Status = car?.status;


  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [showError, setShowError] = useState(false);
  const [numDays, setNumDays] = useState(0);
  const [priceEstimate, setPriceEstimate] = useState(0);
 
  const [commande, setcommande] = useState({
    userId:user?._id,
    userName:user?.name+" "+user?.lastname,
    manufacturer: car?.manufacturer,
    model: car?.model,
    status: car?.status,
    price: car?.price,

    rentalPeriod: car?.status === "Rent"
        ? { startDate: fromDate ? new Date(fromDate) : null,
          endDate: toDate ? new Date(toDate) : null, }
        : null,
    operationDate: new Date()
    // rentalPeriod: {
    // startDate: "",
    // endDate: ""
    // },
    
  })
  

  const rentPricePerDay = 100; // $100 per day for rent

  const handleRequest = async () => {
    const token = localStorage.getItem("token");

    if (!token || !user) {
      alert("❌ You must be logged in to make a request.");
      return;
    }
    try {dispatch(addcommande(commande));
      alert("✅ Your request has been sent!");
      setping(!ping)
      navigate("/cars");
    }catch (err) {
      console.error(err);
      alert("❌ Failed to create request.");
    }
  }

   useEffect(() => {
    if (Status === 'Rent' && fromDate && toDate) {
      const from = new Date(fromDate);
      const to = new Date(toDate);

      if (from < to) {
        setShowError(false);

        // Calculate days difference
        const diffTime = to - from;
        
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // convert ms to days
        setNumDays(diffDays);

        // Calculate price estimate
        setPriceEstimate(diffDays * rentPricePerDay);
      } else {
        setShowError(true);
        setNumDays(0);
        setPriceEstimate(0);
      }
    } else {
      setNumDays(0);
      setPriceEstimate(Status === 'Sale' ? Number(car.price) || 0 : 0);
      setShowError(false);
    }
     
  }, [Status, fromDate, toDate, car.price]);
  
  
  const canBuy =
  Status !== 'Rent' || (fromDate && toDate && new Date(fromDate) < new Date(toDate));
 
  console.log(" Commande payload being sent:", JSON.stringify(commande, null, 2));

  return (
    <div>
    <div className="car-detail">
    {/* Left: Image + Buttons */}
    <div className="image-section">
      <img src="https://rally.axiomthemes.com/wp-content/uploads/2024/02/car10-copyright-1290x725.jpg" alt="Luxury Car" />
        {Status === 'Rent' && (
            <div id="reservation-section" className='reservation-section'>
              <div className="date-range">
                <label htmlFor="from-date">From:</label>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => {
                      setcommande({...commande,rentalPeriod: {...commande.rentalPeriod,startDate: e.target.value}});
                      setFromDate(e.target.value);
                    }}
                  />
              </div>

              <div className="date-range">
                <label htmlFor="to-date">To:</label>
                <input
                    type="date"
                    value={toDate}
                    onChange={(e) => {
                      setcommande({...commande,rentalPeriod: {...commande.rentalPeriod,endDate: e.target.value}})
                      setToDate(e.target.value);
                    }}
                  />
              </div>
            </div>)}
        
           {showError && (<p style={{ color:'red',marginTop:'10px',fontSize:'16px'}}>❌ End date must be after start date</p>)}
          {!showError && numDays > 0 && (<div style={{display: 'flex',justifyContent: 'space-around',gap: '90px',margin: '20px 0',fontSize: '18px',color: '#ddd',}}> 
            <p>
              Reservation Period: <strong>{numDays} {numDays === 1 ? 'day' : 'days'}</strong>
            </p>
            <p>
              Estimated Price: <strong>${priceEstimate.toLocaleString()}</strong>
            </p>
          </div> )}
          

      
      <div className="btn-container">
        <button className="button back-btn"  onClick={() => navigate('/cars')}>← Back to Home</button>
        <button  disabled={!canBuy} className="button buy-btn"  onClick={handleRequest}>Request Now</button>
      </div>
    </div>
             {/* onClick={()=>{dispatch(addcommande(commande));setping(!ping); alert("okey"); navigate("/profil")}} */}
   
    <div className="details-section">
      <div className="car-header">
        <h1>{car?.manufacturer}</h1>
        <h2>{car?.model}</h2>
      </div>

      <div className="specs">
        <div className="spec-row"><h3>Model:</h3><p>{car?.model}</p></div>
        <div className="spec-row"><h3>Year:</h3><p>{car?.year}</p></div>
        <div className="spec-row"><h3>Transmission:</h3><p>{car?.transmission}</p></div>
        <div className="spec-row"><h3>Type of Drive:</h3><p>{car?.typeOfDrive}</p></div>
        <div className="spec-row"><h3>Fuel:</h3><p>{car?.fuel}</p></div>
        <div className="spec-row"><h3>Mileage:</h3><p>{car?.mileage}</p></div>
        <div className="spec-row"><h3>Engine:</h3><p>{car?.engine?.displacement || 'N/A'}</p></div>
        <div className="spec-row"><h3>Horsepower ( HP):</h3><p>{car?.engine?.power?.horsepower || 'N/A'}</p></div>
        <div className="spec-row"><h3>Watts (w):</h3><p>{car?.engine?.power?.watts || 'N/A'} </p></div>
          <div className="spec-row"><h3>Price:</h3><p>{car?.price} TND</p></div>
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Detail;