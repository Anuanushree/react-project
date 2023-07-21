import React from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Rpassword from './components/Rpassword';
import './App.css'
import Thankyou from './components/thankyou';
import Message from './components/message';
import Register from './components/Register';


function App() {

  return (
    <Router>
      <Link to='/' ></Link>
      <Routes>
        <Route path='/reset/:resetToken' element={<Register/>} />
        <Route path='/' element={<Rpassword />} />
        <Route path='/thankyou' element={<Thankyou />} />
        <Route path='/message' element={<Message />} />

      </Routes>


    </Router>
  )
}

export default App;