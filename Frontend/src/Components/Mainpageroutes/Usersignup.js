import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import Header from '../Header';
import Footer from '../Footer';
import { useState } from "react";
import { addUser } from "../Services/api";
function Usersignup() {
  const [userData, setuserData]= useState({

    firstname: "",
    secondname: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const {firstname,secondname,email,password,confirmpassword}= userData;

  const handlechange =(e)=>{
    setuserData({...userData, [e.target.name]: e.target.value})
  }

  const adduser = async (e)=> {
    e.preventDefault();
    console.log("in sign up"+ userData.email);
    await addUser(userData);
  }


  return (
    <div>
      <Header />
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          {/* Image Column */}
          <MDBCol col='10' md='6'>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          {/* Signup Form Column */}
          <MDBCol col='4' md='6'>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign up with</p>
              <MDBBtn floating size='md' tag='a' className='me-2'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>
              {/* Add other social media signup buttons as needed */}
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>

            {/* Form Fields */}
            <MDBInput wrapperClass='mb-4' label='First Name' name='firstname' id='firstname' type='text' size="lg" onChange={(e) => handlechange(e)} />
<MDBInput wrapperClass='mb-4' label='Last Name' name='secondname' id='secondname' type='text' size="lg" onChange={(e) => handlechange(e)} />
<MDBInput wrapperClass='mb-4' label='Email' name='email' id='email' type='email' size="lg" onChange={(e) => handlechange(e)} />
<MDBInput wrapperClass='mb-4' label='Password' name='password' id='password' type='password' size="lg" onChange={(e) => handlechange(e)} />
<MDBInput wrapperClass='mb-4' label='Confirm Password' name='confirmpassword' id='confirmpassword' type='password' size="lg" onChange={(e) => handlechange(e)} />

            
            {/* Signup Button */}
            <div className='text-center text-md-start mt-4 pt-2'>
              <button type="button" className="btn btn-primary" style={{ margin: "4px" }}  onClick={(e)=>adduser(e)}>Sign Up</button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="http://localhost:3000/login" className="link-danger">Log in</a></p>
            </div>
          </MDBCol>
        </MDBRow>
        
        {/* Social signup buttons */}
        <div>
          {/* Include social signup buttons here */}
        </div>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Usersignup;
