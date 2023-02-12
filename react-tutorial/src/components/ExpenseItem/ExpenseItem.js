import React from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import './css/ExpenseItem.css';
import Button from 'react-bootstrap/Button';
import BgAnimation from '../Background/BgAnimation';


function ExpenseItem(props){

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return(
        <>
        <div className='expense-item'>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className='expense-item__description'>
            <h2 className="expensetitle">{props.title}</h2>
            <Button className="expense-item__price" variant="primary">${props.amount}</Button>
        </div>
        </div>
        <BgAnimation/>
        </>
        
    );
}

export default ExpenseItem;