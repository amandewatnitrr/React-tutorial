import Image from "../../imgs/404.svg";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    Link
  } from "react-router-dom";
import Navbar from '../Navbar/Home/navbar';
import Footer from '../footer/footer';
import BgAnimation from '../Background/BgAnimation';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/404.css';


export default function Custom404() {

  
  return (
      <>
      <Navbar/>
      <div class="lost" style={{"min-height":"50vh"}}>
        <br/><br/>
      <b>
      <Card className='itemscard' id="shadow404">
      <Button className="neg404" variant="danger" type="submit">ERROR 404</Button>
      <br/><br/>
          <p>
          The page is missing or never was written. You can wait and<br />
          see if it becomes available again, or you probably got a wrong URL.	
          </p>
          <p>
          <ul>
          <li>Send us an e-mail to notify this and try it later.</li>

          <li>Press Home or About to return to the Main Page or<br />
          &nbsp; if you want to Login/Sigup click Sign In/ Sign Up on the Navbar.</li>
          </ul>
          </p>
          <br/>
          Press any link to continue
          <div class="menu">
            <Link className="link404" to="/home">HOME</Link> | <Link className="link404" to="/about">ABOUT</Link> | 
          </div>
          <br/>
          </Card>
          </b>
      </div>
      <br/>
      
      <BgAnimation/>
      <Footer/>
      </>
  );
}