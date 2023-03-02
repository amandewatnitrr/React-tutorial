/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import './css/Profile.css';
import AddExpesneItem from '../../AddExpenseItem/AddExpenseItem';
import ExpenseFilter from '../../ExpenseItem/ExpensesFilter/Expensesfilter';

function Profile() {

  var expensesData = [];
  const [filteredYear, setFilteredYear] = useState('2023');
  const [expenses,SetExpense] = useState(expensesData)
  const handleAddExpense  = (data)=>SetExpense(d=>([data,...d]));

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  {
    /*

      This Function filters the list/array expenses and makes another list filteredExpenseList that is to be rendered.

      var filteredExpenseList = expenses.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });

      var expenselist = <p>No Expenses Found for given Year..</p>;

      if(filteredExpenseList.length > 0)
      {
          expenselist = filteredExpenseList.map((expense,idx) => <ExpenseItem 
            key={idx} 
            title={expense.title} 
            amount={expense.amount} 
            id={idx} 
            SetExpense={SetExpense} 
            date={expense.date}
            />
        );

      }

      

    */
  }

  var expenselist = expenses.map((expense,idx) => <ExpenseItem 
    key={idx} 
    title={expense.title} 
    amount={expense.amount} 
    id={idx} 
    SetExpense={SetExpense} 
    date={expense.date}
    />
  );

  // prem
  return (
    <>
    <Navabar/>
    <div id="home" style={{"min-height":"50vh"}}>
    
    <br/>

    <Card className='itemscard'>
      <Card.Body>
        {/* added hadleAddExpence */}
        <AddExpesneItem handleAddExpense={handleAddExpense}/>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenselist}
        <br/>
      </Card.Body>
    </Card>

    </div>
    <BgAnimation/>
    <br/>
    <Footer />
    </>
  );
}

export default Profile;