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
import SignIn from './SignIn.js';
import SignUp from  './SignUp.js';
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
      <Navbar/>
      <div id="home" style={{"min-height":"50vh"}}>
        
      <Card id="signinform">
      <Tabs
      defaultActiveKey="signin"
      id="uncontrolled-tab-example"
      className="mb-2"
      >

        <Tab eventKey="signin" title="Sign In">
          <SignIn/>
        </Tab>

        <Tab eventKey="signup" title="Sign Up">
        <SignUp/>
        </Tab>
      </Tabs>

      </Card>

      </div>
      <br/>
      <Footer/>
      <BgAnimation/>
    </>
  );
}

export default Signin;
