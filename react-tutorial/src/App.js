import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Navbar from './components/Navbar/Home/navbar';
import BgAnimation from './components/Background/BgAnimation';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Router>
        <Routes>
            
            <Route exact path='/Home' element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
