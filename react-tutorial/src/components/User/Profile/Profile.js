import React, { useState } from 'react';
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';
import './css/Profile.css';
import AddExpesneItem from '../../AddExpenseItem/AddExpenseItem';

function Profile() {

  var expensesData = [];

  //prem
  const [expenses,SetExpense] = useState(expensesData)

  const handleAddExpense  = (data)=>SetExpense(d=>([...d,data]));

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