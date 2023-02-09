import React from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/navbar.css'
import Button from 'react-bootstrap/Button';
import {FaHome, FaSignInAlt, FaDoorOpen,FaJenkins} from 'react-icons/fa';


function ExpenseItem(){
    return(
        <div class="sticky-top">
        <Navbar bg="dark" variant='dark' expand="md">
            <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/Home"><FaHome/> Home</Nav.Link>
                    <Nav.Link href="/About"><FaJenkins/> About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/SignIn"><Button id="signinbutton" variant="success"><FaSignInAlt/> Sign In</Button></Nav.Link>
                    <Nav.Link href="/SignIn"><Button id="signinbutton" variant="success"><FaDoorOpen/> Sign Up</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default ExpenseItem;