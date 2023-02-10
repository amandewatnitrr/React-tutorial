import React from 'react';
import{Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import{AddTransaction} from './components/AddTransaction'
import{GlobalProvider} from './context/GlobalState'
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import './css/ExpenseCalc.css';

function ExpenseCalculator() {
  return (
    <>
    <Navabar/>
    <GlobalProvider>
      <Card id="expensecalc">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </Card>
    </GlobalProvider>
    <BgAnimation/>
    <Footer />
    </>
  );
}

export default ExpenseCalculator;
