import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './css/ExpensesFilter.css';

function ExpensesFilter (props){
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
    <br/>
    <Card variant="Secondary" bg="dark">
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label><h6>Filter by year</h6></label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    </Card>
    </>
  );
};

export default ExpensesFilter;