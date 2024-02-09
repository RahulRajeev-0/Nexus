import React,{useReducer, useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Register.css'
import Icon from './../../../../assets/icon.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import ThreeDBackground from '../../../vantaJS/ThreeDBackground';
import axios from 'axios';

// alert toastify
import { toast } from 'react-toastify';


const Register = () => {
  
  
  const navigate = useNavigate();
  const baseURL = 'http://127.0.0.1:8000'


  //  validating the input data 
  const  validate = (e)=>{
    let username = e.target.username.value;
   let email = e.target.email.value
   let password = e.target.password.value
   let confirmpassword = e.target.confirmpassword.value
  
   if (username.length <= 3){
    toast.warning('Username should have atleast 4 character')
    return false;
   }

   if (username.includes(' ')){
    toast.warning("Username cannot contain blankspace")
    return false;
   }

   const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]*[a-zA-Z][a-zA-Z\d]*$/;
   if (!regex.test(username)){
    toast.warning("Invalid Format")
    return false;
   }

   if (!email.includes('@') || !email.includes('.com') || email.includes(' ')){
    toast.warning('Invalid Email Format')
    return false;
   }

   if (password.includes(' ')){
    toast.warning('Password should not include blank space')
    return false;
   }
   if (password.length < 8 ){
    toast.warning('Password Should Contain Atleast 8 Characters')
    return false;
   }

   if (password !== confirmpassword){
    toast.warning('Passwords do not match')
    return false;
   }

   return true;
  }

  //  sending the data to the dackend 
  const handleSubmit = async (e)=>{
    e.preventDefault();
   
    
    const formData = new FormData();
    formData.append('username', e.target.username.value);
    formData.append('email', e.target.email.value);
    formData.append('password', e.target.password.value);
    

      if (validate(e)){

        try{
          const res = await axios.post(baseURL+'/user/register/',formData)
          if (res.status === 201){
            sessionStorage.setItem('registrationEmail', e.target.email.value);
            navigate(
              '/otp',
              {
                state:res.data.Message
              }
              )
              return res
          }
        }catch (error){
          if (error.response && error.response.data && error.response.data.message) {
            // Show error messages using Toastify
            error.response.data.message.forEach(errorMessage => {
              toast.error(errorMessage);
            });
          } else {
            // Show a generic error message if there are no specific error messages from the backend
            toast.error('An error occurred. Please try again later.');
          }
         
          if (error.response.status===406){
            console.log("error")
            console.log(error.response.data)
           
            toast.error(error.response.data.message);

          } else{
            console.log(error)
          }
        }
      
      }    
    
    
  }

  return (
    
 <ThreeDBackground>

    <section className="vh-75 " style={{ border: 'none' , backgroundColor: 'transparent', boxShadow: 'none' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black " style={{ border: 'none' , backgroundColor: 'transparent', boxShadow: 'none' }} >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:'violet'}}>Sign Up</p>
                    <p className='text-center'>We suggest using the email address that you use for work </p>
                    

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faUser} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">

                          <input type="text" id="form3Example1c" className="form-control" name="username" required/>

                          <label className="form-label" htmlFor="form3Example1c">Username</label>
                        </div>
                      </div>


                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">

                          <input type="email" id="form3Example3c" className="form-control" name="email" required/>

                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">

                          <input type="password" id="form3Example4c" className="form-control" name="password" required/>

                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <FontAwesomeIcon icon={faKey} className="fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">

                          <input type="password" id="form3Example4cd" className="form-control" name="confirmpassword" required />

                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button  type="submit" className="btn btn-primary btn-lg me-3">Register</button>
                            <button type="button" className="btn btn-lg ms-3 btn-dark">Google</button>
                        </div>

                    </form>
                  </div>

                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={Icon}
                      className="img-fluid"
                      alt="Sample image"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </ThreeDBackground>
  )
}

export default Register
