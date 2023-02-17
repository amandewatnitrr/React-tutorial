import React, { useState } from 'react';
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import './css/Profile.css';
import AddExpesneItem from '../../AddExpenseItem/AddExpenseItem';

function Profile() {

  var expensesData = [
    {
      id: 'e1',
      title: "Macbook Pro 14",
      amount: 2484.23,
      date: new Date(2023, 0, 26),
    },
    {
      id: 'e2',
      title: "Clothes",
      amount: 113.30,
      date: new Date(2023, 0, 24),
    },
    {
      id: 'e4',
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  //prem
  const [expenses,SetExpense] = useState(expensesData)

  const handleAddExpense  = (data)=>SetExpense(d=>([...d,data]));

  var expenselist = expenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} id  = {expense.id} SetExpense = {SetExpense} date={expense.date}/>);
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
        {expenselist}
        <br/>
      </Card.Body>
    </Card>

    </div>
    <BgAnimation/>
    <Footer />
    </>
  );
}

export default Profile;