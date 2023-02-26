import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    Link
  } from "react-router-dom";
import Navbar from '../Navbar/Home/navbar';
import BgAnimation from '../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import Footer from '../footer/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PasswordStrengthBar from 'react-password-strength-bar';
import './css/signin.css';

function Signin() {

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

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter Password" onChange={handlePassword} value={password}/>
                <Form.Control.Feedback type="invalid">
                    Please Enter the password
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Link className="nav-link" to="/Profile"><Button id="signninbtn" variant="primary" type="submit">Sign In</Button></Link>

            <br/><br/>
            <Form.Text>
                <b>Register yourself, if you are a new user.</b>
            </Form.Text>

        </Form>
        
    </>
  );
}

export default Signin;
