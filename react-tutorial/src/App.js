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
import SignInUp from './components/SignInOut/SignInUp';
import ExpenseCalc from './components/User/ExpenseCalc/ExpenseCalc';
import Profile from './components/User/Profile/Profile';
import NotFound from './components/404/404';

function App() {
  return (
    <>
    <Router>
        <Routes>
            
            <Route exact path='/Home' element={<Home />} />
            <Route exact path='/SignIn' element={<SignInUp />} />
            <Route exact path='/ExpenseCalc' element={<ExpenseCalc />} />
            <Route exact path='/Profile' element={<Profile />} />
            <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
