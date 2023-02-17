import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaEdit } from 'react-icons/fa';
import './css/EditExpenseItem.css';
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
    SetExpense(expenses => {
      const filtered = expenses.filter((expenseItem) => {
        if (expenseItem.id === id) {
          expenseItem.title = enteredTitle;
          expenseItem.amount = enteredAmt;
          expenseItem.date = new Date(enteredDate);
          return expenseItem;
        }
        return expenseItem;
      })
      return filtered
    })
    // title = enteredTitle;
    // date = enteredDate;
    // amount = enteredAmt;
    console.log(enteredTitle + " " + enteredAmt + " " + enteredAmt);
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

  return (
    <>

      <FaEdit className='EditExpense' onClick={handleShow} />

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