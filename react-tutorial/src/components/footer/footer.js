import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './css/footer.css';
import {
  Link,
} from "react-router-dom";

export default function footer() {
  const handleClick = () => {
    window.scrollTo(0,0);
  }
  return (
    <MDBFooter id='footer' bgColor='dark' color='white' className='text-center text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                 Expense Tracker
              </h6>
              <p align="justify">
                    Our Company provides you with services related to managing your finances by analyzing your daily expenses. And remiding
                    you with your savings and expenditures on different things and categorise them. So, that you can track it all from one place.
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to="/Home" className='text-reset' onClick={handleClick}>
                  Home
                </Link>
              </p>
              <p>
                <Link to="/About" className='text-reset' onClick={handleClick}>
                  About Us
                </Link>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={handleClick}>
                  Sign Up
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' onClick={handleClick}>
                  Sign In
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                XXX XXXX, XX XXXXX, XX
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + XX XXX XXX XX
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + XX XXX XXX XX
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div color='white'className='text-center p-4 fw-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <h6><b>Expense Tracker Team</b></h6>
      </div>
    </MDBFooter>
  );
}