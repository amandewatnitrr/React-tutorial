import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/AddExpenseItem.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddExpesneItem = ({handleAddExpense}) => {


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
// prem
  const submitHandler = (e) =>{
    e.preventDefault();
    handleAddExpense({
      title:enteredTitle,
      id:"u2",  // TODO pass the last id to set this id
      amount:enteredAmt,
      date: new Date(enteredDate)
    })
  }
  return (
    <Card>
        <Card.Header><h4>Add New Expense</h4></Card.Header>
        <Card.Body>
            
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            {/* added value prop here */}
                            <Form.Control value={enteredDate} onChange={dateHandler} type="date" placeholder="Enter Date" />
                        </Form.Group>

                        <Form.Group as={Col} md="7" controlId="formBasicText">
                            <Form.Label>Expense Title</Form.Label>
                            {/* added value prop here */}
                            <Form.Control value={enteredTitle} type="title" onChange={titleHandler} placeholder="Enter Expense Title" />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-2">
                        <Form.Group as={Col} md="4" controlId="formBasicCost">
                            <Form.Label>Enter the Amount</Form.Label>
                            {/* added value prop here */}
                            <Form.Control value={enteredAmt} onChange={amtHandler} min='0.01' step='0.01' type="number" placeholder="0" />
                        </Form.Group>
                    </Row>
                {/* added submitHandler */}
                <Button onClick={submitHandler} variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Card.Body>
    </Card>
  );
};

export default AddExpesneItem;