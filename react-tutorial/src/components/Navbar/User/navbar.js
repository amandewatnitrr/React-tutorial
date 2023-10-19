import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                    <Nav.Link href="/Profile"><FaHome/> Profile</Nav.Link>
                    <Nav.Link href="/ExpenseCalc"><FaJenkins/> Expense Calculator</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/Home"><Button id="signoutbutton" variant="danger"><FaSignInAlt/> Sign Out</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default ExpenseItem;