import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaEdit } from 'react-icons/fa';
import './css/EditExpenseItem.css';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
// added this funtion to convert string to Date Object
const parseDate = (date) => {
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - (offset * 60 * 1000))
  return date.toISOString().split('T')[0]
}
// id and SetExpense Props
function EditButton({ title, date, amount, SetExpense, id }) {

  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredAmt, setEnteredAmt] = useState(amount);
  const [enteredDate, setEnteredDate] = useState(parseDate(date));


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// changed this funtion
  const Submit = (event) => {

    setShow(false);
    SetExpense((expenses) =>expenses.filter((expenseItem,idx) => {
        if (id === idx) {
          expenseItem.title = enteredTitle;
          expenseItem.amount = enteredAmt;
          expenseItem.date = new Date(enteredDate);
          return expenseItem;
        }
        return expenseItem;
      }))
    // title = enteredTitle;
    // date = enteredDate;
    // amount = enteredAmt;
    console.log(enteredTitle + " " + enteredAmt + " " + enteredAmt);
    toggleShowA();
  }

  const titleHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  }

  const amtHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmt(event.target.value);
  }

  const dateHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  }

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const [showA, setShowA] = useState(false);
  const [position, setPosition] = useState('top-start');
  const toggleShowA = () => {
    setShowA(!showA);
    delay(8000).then(()=> setShowA(false));
  }

  return (
    <>

      <FaEdit className='EditExpense' onClick={handleShow} />
      <ToastContainer position="top-end" className="p-3">
                  <Toast id="ToastRecord" show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">Expense Record Updated</strong>
                      <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>Record Updated: {enteredTitle} = {enteredAmt} &#8377;</Toast.Body>
                  </Toast>
      </ToastContainer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control value={enteredDate} type="date" onChange={dateHandler} placeholder={date} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicHeading">
              <Form.Label>New Title</Form.Label>
              <Form.Control value={enteredTitle} type="title" onChange={titleHandler} placeholder={title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control value={enteredAmt} type="number" onChange={amtHandler} placeholder={amount} />
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