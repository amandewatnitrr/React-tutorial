import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaTrash } from 'react-icons/fa';
import '../EditExpenseItem/css/EditExpenseItem.css';


function DeleteButton({ title, date, amount, id, SetExpense }) {

  const deleteExpense = (event) =>{
        console.log(id + " " + title + " " + amount + " " + date);
        SetExpense(expenses=>expenses.filter((exp,idx) => idx !==id))
  }

  return (
    <>
      <FaTrash className='EditExpense' onClick={deleteExpense} />
    </>
  );
}

export default DeleteButton;