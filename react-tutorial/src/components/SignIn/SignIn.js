import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from '../Navbar/Home/navbar';
import BgAnimation from '../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import Footer from '../footer/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './css/signin.css';

function signin() {


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
            
        <Form id="formsign">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        </Tab>
        <Tab eventKey="signup" title="Sign Up">
            Aman
        </Tab>
      </Tabs>

      </Card>

      </div>

      <Footer/>
      <BgAnimation/>
    </>
  );
}

export default signin;
