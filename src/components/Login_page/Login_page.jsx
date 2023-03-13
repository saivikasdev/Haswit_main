import React from 'react';
import './Login_page.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login_page() {
  return (
   <div className="Login_page">
     <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden '>

<MDBRow>

  <MDBCol md='5' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-1 display-6 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
      HASWIT<br />
      <span style={{color: 'hsl(218, 81%, 75%)',fontSize:'15px'}}>Handshake with IT sector</span>
    </h1>

    <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eos quasi culpa. Ducimus voluptas aliquam similique alias nemo corporis! Eveniet doloremque modi officiis, similique in reprehenderit amet iste voluptatum nisi.
    </p>

  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>

        <MDBRow>
          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            
          </MDBCol>

          <MDBCol col='6'>
            <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

        <div className="text-center">

          <p>or sign up with:</p>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
   </div>
  );
}

export default Login_page;