import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from '../Navbar/Home/navbar';
import BgAnimation from '../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import './css/home.css';

function App() {
  return (
    <>
      <Navbar/>
      <div class='card-div'>
      <Card id="card1" style={{ width: '80%' }}>
      <Card.Header><strong><h3><b>Why you need this??</b></h3></strong></Card.Header>
        <Card.Body>
            <Card.Text style={{textAlign:"justify"}}>
                <b>
                Expense Tracker is your tool to flexibly plan your budget and track spending, so you stay in control and achieve your goals. 
                Actively plan, manage and get a report concerning your finances, together with the people you trust, across multiple 
                currencies, banks and financial institutions. Upload your Loyalty or Reward cards too. Get and keep full control of your finances.
                </b>
            </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <BgAnimation/>
    </>
  );
}

export default App;
