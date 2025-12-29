import React from 'react'
import Card from 'react-bootstrap/Card';
import './Productcard.css'
import { deletecar } from '../JS/carSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import Editcar from './Editcar';



function Productcard({el ,ping,setping}) {

  
  const dispatch = useDispatch();
  return (
    <div>
        <Card className='carta'>
        <Link to={`/car/${el?._id}`}>
        <Card.Img variant="top" src='./car.png' />
        <Card.Body>
          <Card.Title>{el?.manufacturer}</Card.Title>
          <Card.Text>
            <p>{el?.model} DT</p>
          </Card.Text>
          <Card.Text>
            <p>{el?.price} DT</p>
          </Card.Text>
          </Card.Body>
          </Link>
          <Card.Body>
        <div className='pair_btn'>
          <button onClick={()=>{dispatch(deletecar(el?._id));setping(!ping)}} className='delete_btn'> <img src='delete.png' alt='delete'/> </button>
          <Editcar car={el} ping={ping} setping={setping}/> 
        </div>
      </Card.Body>
    </Card>
    
    </div>
  )
}

export default Productcard