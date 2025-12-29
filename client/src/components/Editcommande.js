import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editcommande } from '../JS/commandeSlice'; // Make sure this action exists
import './editcar.css'



function Editcommande({ commande, ping, setping }) {


  const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const [edited, setEdited] = useState({
    ...commande,
    rentalPeriod: commande.status === "Rent"
      ? {
          startDate: commande.rentalPeriod?.startDate || "",
          endDate: commande.rentalPeriod?.endDate || "",
        }
      : null,
  });
console.log("editcommande ping",ping)

  return (
    <div>
      <button className="btn btn-info" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose} className='modal-css'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Commande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ fontSize: '16px' }}>
            <Form.Group className="mb-3">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type="text"
                placeholder={edited?.manufacturer}
                onChange={(e) =>
                  setEdited({ ...edited, manufacturer: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder={edited?.model}
                onChange={(e) =>
                  setEdited({ ...edited, model: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                placeholder={edited?.status}
                onChange={(e) =>
                  setEdited({
                    ...edited,
                    status: e.target.value,
                    rentalPeriod: e.target.value === "Rent"
                      ? { startDate: "", endDate: "" }
                      : null,
                  })
                }
              >
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </Form.Select>
            </Form.Group>

            {edited.status === "Rent" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Rental Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={edited?.rentalPeriod?.startDate?.split("T")[0] || ""}
                    onChange={(e) =>
                      setEdited({
                        ...edited,
                        rentalPeriod: {
                          ...edited.rentalPeriod,
                          startDate: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rental End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={edited.rentalPeriod?.endDate?.split("T")[0] || ""}
                    onChange={(e) =>
                      setEdited({
                        ...edited,
                        rentalPeriod: {
                          ...edited.rentalPeriod,
                          endDate: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder={edited?.price}
                onChange={(e) =>
                  setEdited({ ...edited, price: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Operation Date</Form.Label>
              <Form.Control
                type="date"
                value={edited?.operationDate?.split("T")[0] || ""}
                onChange={(e) =>
                  setEdited({ ...edited, operationDate: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        <button onClick={async () => {await dispatch(editcommande({ id: commande._id, edited }));setping(ping => !ping); handleClose();}}>
                Save
        </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Editcommande;
