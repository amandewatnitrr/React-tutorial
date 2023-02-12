import React from 'react';
import Footer from '../../footer/footer';
import Navabar from '../../Navbar/User/navbar';
import BgAnimation from '../../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import ExpenseItem from '../../ExpenseItem/ExpenseItem';

function Profile() {

  const expenses = [
    {
      id: 'e1',
      title: 'Macbook Pro 14',
      amount: 2484.23,
      date: new Date(2023, 0, 26),
    },
    {
      id: 'e2',
      title: 'Clothes',
      amount: 113.30,
      date: new Date(2023, 0, 24),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <>
    <Navabar/>
    <div id="home" style={{"min-height":"50vh"}}>

    <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

    <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

    </div>
    <Footer />
    </>
  );
}

export default Profile;
