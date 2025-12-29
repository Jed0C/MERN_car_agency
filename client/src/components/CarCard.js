import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import './Productcard.css'


function CarCard({car,ping,setping}) {

  const dispatch = useDispatch();
  return (
    <div><Link to={`/car/${car?._id}`}>
            <Card className='carta'>
            
            <Card.Img style={{margin:'10px auto'}} variant="top" src='./car.png' />
            <Card.Body style={{margin:'10px auto'}}>
              
              <Card.Text >
                <h1>{car?.manufacturer}</h1>
                <p>{car?.model} </p>
                <p style={{margin:'10px auto'}}>{car?.price} DT</p>
              </Card.Text>
              
          </Card.Body>
        </Card>
        </Link>
        </div>
  )
}

export default CarCard