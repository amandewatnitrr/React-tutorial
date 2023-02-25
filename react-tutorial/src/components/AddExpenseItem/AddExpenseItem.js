import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/AddExpenseItem.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const AddExpesneItem = ({handleAddExpense}) => {


  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmt, setEnteredAmt] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [validated, setValidated] = useState(false);

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

  const handleSubmit = (event) => {
    
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    handleAddExpense({
      title:enteredTitle,
      id: (Math.random()*10000).toString(),
      amount:enteredAmt,
      date: new Date(enteredDate)
    })
    toggleShowA();
  };

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
    <Card>
        <Card.Header><h4>Add New Expense</h4></Card.Header>
        <Card.Body>

        <ToastContainer position="top-end" className="p-3">
                  <Toast id="ToastRecord" show={showA} onClose={toggleShowA}>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">History Updated</strong>
                      <small>Just Now</small>
                    </Toast.Header>
                    <Toast.Body>Record Updated: {enteredTitle} = {enteredAmt}</Toast.Body>
                  </Toast>
        </ToastContainer>
            
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="formBasicDate">
                            <Form.Label>Date</Form.Label>
                            {/* added value prop here */}
                            <Form.Control required value={enteredDate} onChange={dateHandler} type="date" placeholder="Enter Date" />
                            <Form.Control.Feedback type="invalid">
                                Please Enter the Date
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="7" controlId="formBasicText">
                            <Form.Label>Expense Title</Form.Label>
                            {/* added value prop here */}
                            <Form.Control required value={enteredTitle} type="title" onChange={titleHandler} placeholder="Enter Expense Title" />
                            <Form.Control.Feedback type="invalid">
                                Please Enter the Title
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-2">
                        <Form.Group as={Col} md="4" controlId="formBasicCost">
                            <Form.Label>Enter the Amount</Form.Label>
                            {/* added value prop here */}
                            <Form.Control required value={enteredAmt} onChange={amtHandler} min='0.01' step='0.01' type="number" placeholder="Enter Amount" />
                            <Form.Control.Feedback type="invalid">
                                Please Enter the Amount
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                {/* added submitHandler */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                </Form>
        </Card.Body>
    </Card>
  );
};

export default AddExpesneItem;