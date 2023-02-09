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
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../imgs/1647336360698.gif';
import img2 from '../../imgs/filters_quality(75).gif';
import img3 from '../../imgs/image_processing20210310-21872-1ytlz0c.gif';
import Footer from '../footer/footer';
import img4 from '../../imgs/money_tracker_app_4x.webp';
import bootstrap from 'bootstrap';

function App() {
  return (
    <>
      <Navbar/>
      <div id="home" style={{"min-height":"50vh"}}>
        <Carousel fade>

        <Carousel.Item>
            <img
            className="d-block"
            src={img1}
            alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block"
            src={img3}
            alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>

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

      <div id="row">
        <div id="column">
            <img id="img4" src={img4}/>
        </div>

        

        <div id="column">
            <Card id="servicedetails">
            <Card.Header><strong><h3><b>What's in it for you??</b></h3></strong></Card.Header>
                <Card.Body>
                    <Card.Text style={{textAlign:"justify"}}>
                        <b>
                        
                        <p>Expense Tracker provides you with set of financial solutions to keep track of your daily/monthly/weekly/yearly expenditures,
                        including investments. We provide features to categorize and keep track of how much money you have used for certain
                        purpose.</p>

                        <p>We also keep our customers reminded about upcoming future expenses which they can schedule and keep in track in advance
                            to manage there savings for the future.</p>

                        <p>We also provide consultation on Student Fixed Deposits where children b/w age 10-18 can store there money and get returns
                            on them.</p>

                        </b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
      </div>
      </div>

      <Footer/>
      <BgAnimation/>
    </>
  );
}

export default App;
