
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { edituser } from '../JS/userSlice';
import './editcar.css'

function Edituser({ping,setping}) {


    const user = useSelector((state) => state.user.user);
    console.log("edituser ping",ping)
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edited, setedited] = useState({
    name: user?.name || "",
    lastname: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    password: "",
    })

    const dispatch = useDispatch();


    return (
    <div >
        <button  className="btn btn-info" onClick={handleShow} >
           Edit
        </button>

        <Modal show={show} onHide={handleClose} className='modal-css'>
            <Modal.Header closeButton>
            <Modal.Title>Edit profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form style={{fontSize:'18px'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder={user?.name} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,name:e.target.value})} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>lastname</Form.Label>
                        <Form.Control type="text" placeholder={user?.lastname} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,lastname:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder={user?.email} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,email:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder={user?.phone} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,phone:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder={user?.address} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,address:e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>password</Form.Label>
                        <Form.Control type="text" value={edited.password} style={{fontSize:'14px'}} onChange={(e)=>setedited({...edited,password:e.target.value})}/>
                    </Form.Group>

                    

                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={(e)=>{e.preventDefault();dispatch(edituser({id:user?._id,edited}));setping(!ping);handleClose()}} >
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
  )
}

export default Edituser;