import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../css/IncomeExpenses.module.css';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  
  
  

  return (
    <>
    <li style={{
      "background-color": "#fff",
      "box-shadow": "var(--box-shadow)",
      "color": "#333",
      "display": "flex",
      "justify-content": "space-between",
      "position": "relative",
      "padding": "10px",
      "margin": "10px 0",
    }} class={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button style={{
        "cursor": "pointer",
        "background-color": "#e74c3c",
        "border": "0",
        "color": "#fff",
        "font-size": "20px",
        "line-height": "20px",
        "padding": "2px 5px",
        "position": "absolute",
        "top": "50%",
        "left": "0",
        "transform": "translate(-100%, -50%)",
        "opacity": "1",
        "transition": "opacity 0.3s ease",
        
      }} onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
    </>
  )
}