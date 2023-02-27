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

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //prem
  const [expenses,SetExpense] = useState(expensesData)

  const handleAddExpense  = (data)=>SetExpense(d=>([data,...d]));

  var expenselist = expenses.map((expense,idx) => <ExpenseItem key={idx} title={expense.title} amount={expense.amount} id  = {idx} SetExpense = {SetExpense} date={expense.date}/>);
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