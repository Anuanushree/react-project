import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import Rpassword from './components/Rpassword';
import './App.css'
import Thankyou from './components/thankyou';
import Message from './components/message'


function App() {
  const [array, setArray] = useState([]);
  return (
    <Router>
      <Link to='/' ></Link>
      <Routes>
        <Route path='/register/:resetToken' element={<RegisterForm base_url={base_url} />} />
        <Route path='/' element={<Rpassword setArray={setArray} base_url={base_url} />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='/message' element={<Message />} />
        <Route path='/register' element={<Register />} />
    
      </Routes>


    </Router>
  )
}

export default App;