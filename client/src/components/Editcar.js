
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editcar } from '../JS/carSlice';
import './editcar.css'

function Editcar({car,ping,setping}) {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const id =car?._id;

    const [edited, setedited] = useState({
        manufacturer: car?.manufacturer || "",
        model:car?.model || "",
        image:car?.image || "",
        fuel:car?.fuel || "",
        typeOfDrive:car?.typeOfDrive || "",
        status:car?.status || "",
        price:car?.price || "",
    })
     console.log("editcar ping",ping)
    console.log("car edited",edited)

    const dispatch = useDispatch();


    return (
    <div >
        <button  onClick={handleShow} className='edit_btn' style={{zIndex:'99'}}>
            <img src='edit.png' alt='edit' width={'49px'}/>
        </button>

        <Modal show={show} onHide={handleClose} className='modal-css'>
            <Modal.Header closeButton>
            <Modal.Title>Edit car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{fontSize:'18px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,manufacturer:e.target.value})}>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="marcades-benz">Mercedes-benz</option>
                            <option value="hyundai">Hyundai</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Model</Form.Label>
                        <Form.Control type="text" placeholder={car?.model} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,model:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image model URL</Form.Label>
                        <Form.Control type="text" placeholder={car?.image} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,image:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fuel type</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,fuel:e.target.value})}>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type Of Drive</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,typeOfDrive:e.target.value})}>
                            <option value="All-wheel">All-wheel drive</option>
                            <option value="Front-wheel">Front-wheel drive</option>
                            <option value="Rear-wheel">Rear-wheel drive</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Car status</Form.Label>
                        {/* <Form.Control type="" placeholder="Enter movie rate" onChange={(e)=>setnewcar({...newmovie,rating:e.target.value})}/> */}
                        <Form.Select size="sm" style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,status:e.target.value})}>
                            <option value="Rent">Rent</option>
                            <option value="Sale">Sale</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder={car?.price} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,price:e.target.value})}/>
                    </Form.Group>

                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(editcar({id:id,edited}));setping(!ping);handleClose()}} >
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
  )
}

export default Editcar;