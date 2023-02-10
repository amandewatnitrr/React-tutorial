import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Toast from 'react-bootstrap/Toast';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  function styled(){
    toggleShowA();
    var l = document.getElementsByTagName('li');
    for(var i=0;i<l.length;i++)
      {
          if(l[i].className==='plus')
          {
              l[i].style.borderRight = "5px solid #126dff";
          }
          if(l[i].className==='minus')
          {
              l[i].style.borderRight = "5px solid #c0392b";
          }
      }
  }


  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const [showA, setShowA] = useState(false);
  const [position, setPosition] = useState('top-start');
  const toggleShowA = () => {
    setShowA(!showA);
    delay(8000).then(()=> setShowA(false));
  }

  return (
    <>
      <hr/>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div style={{"margin-top":"1rem"}} className="form-control">
          <label htmlFor="text">Text</label>
          <input style={{
          border: "1px solid #dedede",
          "border-radius": "2px",
          display: "block",
          "font-size": "16px",
          padding: "10px",
          width: "100%",
          "margin-top": "0.5rem"
        }} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div style={{"margin-top":"1rem"}} className="form-control" >
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input style={{
          border: "1px solid #dedede",
          "border-radius": "2px",
          display: "block",
          "font-size": "16px",
          padding: "10px",
          width: "100%",
          "margin-top": "0.5rem"
        }} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        
        <button class="expbtn" style={{"cursor": "pointer",
          "background-color": "#9b57fa",
          "box-shadow": "var(--box-shadow)",
          color: "#fff",
          border: 0,
          display: "block",
          "font-size": "16px",
          "margin": "10px 0 30px",
          "padding": "10px",
          "width": "100%",
          "margin-top": "1rem"
          }} onClick={() => styled()} >Add transaction</button>

          <Toast id="ToastRecord" show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">History Updated</strong>
              <small>Just Now</small>
            </Toast.Header>
            <Toast.Body>Record Updated: {text} = {amount}</Toast.Body>
          </Toast>

      </form>
    </>
  )
}