import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cars');}
  
  return (
    <div>
         <header>
          <div className="overlay" />
          <div >
            <video
            src='https://rally.axiomthemes.com/wp-content/uploads/2024/12/an-aston-martin-steering-wheel.mp4'
            autoPlay
            loop
            muted
            style={{ width: '100%', height: 'auto' }}
            />
            </div>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems:'center',
                padding: '30px',
                color: 'white',
                fontFamily: 'Arial, sans-serif',
                
            }}>
              <h2 style={{
              margin: '0px 0 8px 0',
              maxWidth:'50%',
              fontSize: '91.5px',
              fontWeight: '600',
              lineHeight: '1.1em',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              fontFamily:'Manrope,sans-serif',
              textAlign:'center',
              
              
            }}>
              Digital Experiences
            </h2>
            <p style={{
                margin: '10px 0 30px 0',
                fontSize: '35px',
                lineHeight: '1.1em',
                fontWeight: '500',
                maxWidth: '500px',
                textAlign:'center',
                fontFamily:'Manrope,sans-serif',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                
              }}>
                Automotive excellence
              </p>

              <button
            style={{
              padding: '12px 25px',
              margin: '20px 0 80px 0',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '10px',
              width:'145px',
              fontSize: '1.5rem',
              fontFamily:'Manrope,sans-serif',
              fontWeight: '450',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={handleClick}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Get Started
          </button>
          </div>
        </header>
        
    </div>
  )
}

export default Hero;