import React from 'react';
import Card from 'react-bootstrap/Card';

import './css/ExpensesFilter.css';

function ExpensesFilter ({filterChangeHandler,year}){
  const dropdownChangeHandler = (event) => {
    // year.onChangeFilter(event.target.value);
    filterChangeHandler(event.target.value);
  };

  return (
    <>
    <br/>
    <Card variant="Secondary" bg="dark">
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label><h6>Filter by </h6></label>
        <select value={year.selected} onChange={dropdownChangeHandler}>
          <option value='Year'>Year</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    </Card>
    <br/>
    </>
  );
};

export default ExpensesFilter;