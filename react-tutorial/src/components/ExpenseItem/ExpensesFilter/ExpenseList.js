import React from "react";
import ExpenseItem from "../ExpenseItem";

function ExpenseList({filteredExpenseList,SetExpense,filteredYear,expenses}) {

    if(filteredYear==='Year'){
        return expenses.map((expense,idx) => <ExpenseItem key={idx} title={expense.title} amount={expense.amount} id  = {idx} SetExpense = {SetExpense} date={expense.date}/>);
      }

    if(filteredExpenseList.length>0){
        return filteredExpenseList.map((expense,idx) => {return <ExpenseItem key={idx} title={expense.title} amount={expense.amount} id  = {idx} SetExpense = {SetExpense} date={expense.date}/>});
    }

    if(filteredExpenseList.length===0){
        return (
            <div style={{"margin":"0 auto"}} className='expense-item'><p textalign="center"><b>No Expenses Found for given Year.</b></p></div>
        );
      }
}

export default ExpenseList;