import React, { useState } from 'react';
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import './css/Profile.css';
import AddExpesneItem from '../../AddExpenseItem/AddExpenseItem';
import ExpenseFilter from '../../ExpenseItem/ExpensesFilter/Expensesfilter';
import ExpenseList from '../../ExpenseItem/ExpensesFilter/ExpenseList';
import ExpenseChart from '../../Chart/ExpenseChart';
import Linechart from '../../ReChart/LineCharter';

function Profile() {

  var expensesData = [];
  const [expenses,SetExpense] = useState(expensesData)
  const [filteredExpenseList,setFilteredExpenseList] = useState([])
  const [filteredYear, setFilteredYear] = useState('Year');

  const handleAddExpense  = (data)=>SetExpense(d=>([...d,data]));

  const filterChangeHandler = (selectedYear) => {
    const filteredExpenseList = expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
    setFilteredYear(selectedYear);
    setFilteredExpenseList(filteredExpenseList)
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
  const expenseComponents = ()=>{
    return <ExpenseList filteredExpenseList={filteredExpenseList} SetExpense={SetExpense} filteredYear={filteredYear} expenses={expenses}/>
  }

  const expenseChart = ()=>{
      return <ExpenseChart expenses={filteredExpenseList}/>;
  }

  const linechart = ()=>{
      return <Linechart expenses={filteredExpenseList}/>;
  }
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
        <br/>
        {expenseChart()}
        <br/>
        {linechart()}
        <ExpenseFilter filterChangeHandler={filterChangeHandler} year={filteredYear}/>
        {expenseComponents()}
        
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