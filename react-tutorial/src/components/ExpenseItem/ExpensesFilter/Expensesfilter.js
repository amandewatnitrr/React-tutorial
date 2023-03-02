import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './css/ExpensesFilter.css';

function ExpensesFilter (year){
  const dropdownChangeHandler = (event) => {
    year.onChangeFilter(event.target.value);
  };

  return (
    <>
    <br/>
    <Card variant="Secondary" bg="dark">
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label><h6>Filter by year</h6></label>
        <select value={year.selected} onChange={dropdownChangeHandler}>
          <option value='All'>All</option>
          <option value='2023'>2023</option>
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