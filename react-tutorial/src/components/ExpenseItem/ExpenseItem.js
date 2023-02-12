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
        <br/>
        <div style={{"margin":"0 auto"}} className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>

            <div className='expense-item__description'>
                <h2 className="expensetitle">{props.title}</h2>
                <Button className="expense-item__price" variant="danger">${props.amount}</Button>
            </div>
        </div>
        <BgAnimation/>
        </>
        
    );
}

export default ExpenseItem;