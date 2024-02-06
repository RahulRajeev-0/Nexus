import React from 'react'
import Register from './components/user/auth/Register/Register'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user/auth/Login/Login';
import BaseHomePage from './pages/BaseHomePage';
import './App.css'


// toastify ( for alerts )
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
  
    <div className='App'>


      <BrowserRouter>
       <Routes>
         <Route path='/' element={<BaseHomePage/>} />
         <Route path='/signUp' element={<Register/>} />
         <Route path='/Login' element={ <Login/>} />
         
       </Routes>
      
      </BrowserRouter>

      {/* for toastify alert */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition: Flip
      />
    </div>
   
  )
}

export default App
