import React, { useState } from 'react';
import ReactDOM from'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import './css/ExpenseItem.css';
import Button from 'react-bootstrap/Button';
import BgAnimation from '../Background/BgAnimation';
import EditButton from './EditExpenseItem/EditExpenseItem';
import DeleteButton from './DeleteExpenseItem/DeleteExpenseItem';

//id SetExpense props
function ExpenseItem({title, amount, date,id,SetExpense}){


    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

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
                <h2 className="expensetitle">{title}</h2>
                <Button className="expense-item__price" variant="danger">$ {amount} </Button>
            </div>
                
            <div>
                {/* id and setExpense */}
                <EditButton id={id} SetExpense = {SetExpense} title={title} date={date} amount={amount}/>
            </div>
            <div>
                <DeleteButton id={id} SetExpense = {SetExpense} title={title} date={date} amount={amount}/>
            </div>
        </div>
        </>
        
    );
}

export default ExpenseItem;