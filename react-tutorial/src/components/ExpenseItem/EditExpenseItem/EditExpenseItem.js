import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {FaEdit} from 'react-icons/fa';
import './css/EditExpenseItem.css';

function EditButton(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const Submit = (event) => {
    
    setShow(false);
    props.name = enteredTitle;
    props.date = enteredDate;
    props.amt = enteredAmt;
    console.log(props.name + " " + props.date + " " + props.amt);
  }

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmt, setEnteredAmt] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (event) =>{
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  }
  
  const amtHandler = (event) =>{
    console.log(event.target.value);
    setEnteredAmt(event.target.value);
  }

  const dateHandler = (event) =>{
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  }

  return (
    <>
      
      <FaEdit className='EditExpense' onClick={handleShow}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form>

            <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={dateHandler} placeholder={props.date} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHeading">
                <Form.Label>New Title</Form.Label>
                <Form.Control type="title" onChange={titleHandler} placeholder={props.name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" onChange={amtHandler} placeholder={props.amt} />
            </Form.Group>

            </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Submit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditButton;