import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    useNavigate
  } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './css/signin.css';

function SignOut() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [contact, setContact] = useState("");
    const [username, setUsername]= useState("");
  
    const handleName = (e) => {
      setName(e.target.value);
      console.log(e.target.value);
    };
  
    const handleUsername = (e) => {
      setUsername(e.target.value);
      console.log(e.target.value);
    };
  
    const handleContact = (e) => {
      setContact(e.target.value);
      console.log(e.target.value);
    }
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    };
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if(form.checkValidity() === false)
          {
              event.preventDefault();
              event.stopPropagation();
          }
  
      if(email !== "" && password !== "")
          {
              console.log("User Logged In");
          }
      setValidated(true);
    };
  
    return (
      <>
          <Form id="formsign" noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="name" placeholder="Enter Name" onChange={handleName} value={name}/>
                  <Form.Control.Feedback type="invalid">
                      Please Enter your Name
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" placeholder="Enter email" onChange={handleEmail} value={email}/>
                  <Form.Control.Feedback type="invalid">
                      Please Enter the Email Address
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicContact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control required type="password" placeholder="Enter Contact No." onChange={handleContact} value={contact}/>
                  <Form.Control.Feedback type="invalid">
                      Please Enter your Contact Number
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="password" placeholder="Enter Password" onChange={handlePassword} value={password}/>
                  <Form.Control.Feedback type="invalid">
                      Please Enter the password
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>
              
  
              
          
              <Button variant="primary" type="submit">
                  Submit
              </Button>
              <br/><br/>
  
  
              <br/>
  
          </Form>
      </>
    );
  }
  
  export default SignOut;
  