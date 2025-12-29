
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Addcar.css'
import { useDispatch } from 'react-redux';
import { addcar } from '../JS/carSlice';

function Addcar({ping,setping}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newcar, setnewcar] = useState({
            manufacturer:  "",
            model: "",
            image: "",
            fuel: "",
            typeOfDrive: "",
            status: "",
            price: "",
        })

    const dispatch = useDispatch();
    
//className='btnplus'
//className='add'

    return (
    <div >
        <Button  onClick={handleShow} >
            <img src='carlogo.png' alt='+' width={'35px'}/>
        </Button>

        <Modal show={show} onHide={handleClose} className='modal-css' >
            <Modal.Header closeButton>
            <Modal.Title>Add car</Modal.Title>
            </Modal.Header>
             <Modal.Body>
                <Form style={{fontSize:'18px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,manufacturer:e.target.value})}>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="marcades-benz">Mercedes-benz</option>
                            <option value="hyundai">Hyundai</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder="model" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,model:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image model URL</Form.Label>
                        <Form.Control type="text" placeholder="image" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,image:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fuel type</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,fuel:e.target.value})}>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type Of Drive</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,typeOfDrive:e.target.value})}>
                            <option value="All-wheel">All-wheel drive</option>
                            <option value="Front-wheel">Front-wheel drive</option>
                            <option value="Rear-wheel">Rear-wheel drive</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Car status</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,status:e.target.value})}>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="price" style={{fontSize:'14px'}} onChange={(e)=>setnewcar({...newcar,price:e.target.value})}/>
                    </Form.Group>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" style={{fontSize:'14px'}} onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" style={{fontSize:'14px'}} onClick={()=>{dispatch(addcar(newcar));setping(!ping);handleClose()}} >
                add
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
  )
}

export default Addcar;