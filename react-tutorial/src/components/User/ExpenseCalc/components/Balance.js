import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
        <h4 style={{"margin": "0","text-transform": "uppercase",}}>Your Balance</h4>
        <h1 style={{"letter-spacing": "1px",margin: 0,}}>${total}</h1>
        <hr/>
        </>
    )
}
