import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './carlist.css'
import CarCard from './CarCard';
import { getcar } from '../JS/carSlice';


function CarList({ping,setping}) {
    const [manufacturer, setmanufacturer] = useState(null);
    const cars=useSelector((state)=>state.car.carlist);

     const dispatch =useDispatch();
     useEffect(() => {
       dispatch(getcar());
       
     }, [ping,dispatch])
     


  return (
    <div className='carlist_section'>
        <div className='carlist_title'>
        <h1>Where Quality Meets the Road</h1>
        <p>Browse our curated collection of vehicles designed to exceed expectations</p>
        </div>
       <div className='btn_groupe'>
        <button onClick={()=>{setmanufacturer("Mercedes-Benz")}}><img src='mercedes-benz.png' alt='Marcedes' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Audi")}><img src='audi.png' alt='audi' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("BMW")}><img src='bmw.png' alt='bmw' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Hyundai")}><img src='hyundai.png' alt='hyundai' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Jeep")}><img src='jeep.png' alt='jeep' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Cia")}><img src='kia.png' alt='kia' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Chevrolet")}><img src='chevrolet.png' alt='chevrolet' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Porsche")}><img src='porsche.png' alt='porsche' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Tesla")}><img src='tesla.png' alt='tesla' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Mitsubishi")}><img src='mitsubishi.png' alt='mitsubishi' width={'45px'} height={'45px'}/></button>
        <button onClick={()=>setmanufacturer("Renault")}><img src='renault.png' alt='renault' width={'45px'} height={'45px'}/></button>
        </div> 
        
        <div className='cargrid'>{cars?.filter((car) => !manufacturer || car.manufacturer === manufacturer).map((car)=><CarCard  key={car._id} car={car} ping={ping} setping={setping}/>)}</div>
    </div>
  )
}

export default CarList