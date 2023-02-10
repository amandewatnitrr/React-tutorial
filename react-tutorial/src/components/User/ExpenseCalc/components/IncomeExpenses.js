import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../css/IncomeExpenses.module.css';

export const IncomeExpenses = () => {

  

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
    <div style={{
      "background-color": "#fff",
      "padding": "20px",
      "display": "flex",
      "justify-content": "space-between",
      "margin": "20px 0",
      "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      "border-radius":"5px",
      "background-color":"rgba(255, 255, 255, 0.9)",
      "backdrop-filter": "blur( 7.5px )",
      "-webkit-backdrop-filter": "blur( 7.5px )"
    }} 
    class="inc-exp-container">
        <div style={{flex: 1,"text-align": "center"}}>
          <h4>Income</h4>
  <p style={{color: "#2ecc71", "font-size": "20px","letter-spacing": "1px",margin: "5px 0",}}  class="money plus">{income}</p>
        </div>
        <div style={{flex: 1,"text-align": "center",}}>
          <h4>Expense</h4>
  <p style={{color: "#c0392b", "font-size": "20px","letter-spacing": "1px",margin: "5px 0",}} class="money minus">{expense}</p>
        </div>
      </div>
      <hr/>
      </>
  );
}

export default IncomeExpenses;