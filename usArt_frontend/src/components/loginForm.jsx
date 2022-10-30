import React from 'react';
import { useState, useEffect, useRef } from 'react';

import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput
}
  from 'mdb-react-ui-kit';
import { Modal } from 'bootstrap';

async function loginUser(credentials) {
  let logResponse = "";
  let loggedInfo;

  let path = "/auth/login/" + credentials.username + "&" + credentials.password
  return fetch(path, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function Login() {
  const [formErrors, setFormErrors] = useState({});
  const [formResponse, setFormResponse] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [token, setToken] = useState();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleAccept = (e) => {
    if (loggedInfo == True) {
      window.location.assign("http://localhost:3000/home")
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    let response = loginUser({
      username,
      password
    });
    setFormResponse(response)
    logResponse = formResponse[0]
    loggedInfo = formResponse[1]



  };

  useEffect(() => {
    if (isSubmit) {
      modal.show()
    }
  }, [formResponse]);

  return (

    <MDBContainer style={{ marginTop: "14vmin", paddingBottom: "10vmin" }} className="items-align-center justify-content-center " >
      <MDBCard className='text-black m-5 items-align-center shadow' style={{ borderRadius: '26px' }}>

        <MDBCardBody className='shadow'>
          <a href="/home"><BsFillArrowLeftSquareFill size='30' className='mx-3 my-3 shadow' /></a>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#001a1a" }}>Log In.</p>


              <div className="d-flex flex-row align-items-center mb-4 text-center ">
                <MDBInput label='Your Email' id='form2' type='email' placeholder="Email" className='shadow-sm ' onChange={e => setUserName(e.target.value)} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 text-center ">
                <MDBInput label='Password' id='form3' type='password' placeholder="Password" className='shadow-sm' onChange={e => setPassword(e.target.value)} />
              </div>

              <button type="button" onClick={handleSubmit} class="btn btn-primary shadow mb-5 mt-3">Login</button>
              Don't have an account? <a href='/join' className='mb-3'><strong>Sign up</strong></a>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

            <div className="modal fade" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content" >
                  <div className="modal-header">
                    <h5 className="modal-title"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <p>{{ logResponse }}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" onClick={handleAccept}>
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;