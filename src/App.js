import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Rpassword from './components/Rpassword';
import './App.css'
import Thankyou from './components/thankyou';


function App() {
  const [array, setArray] = useState([]);
  return (
    <Router>
      <Link to='/' ></Link>
      <Routes>
        <Route path='/register/:resetToken' element={<Register />} />
        <Route path='/' element={<Rpassword setArray={setArray} />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>


    </Router>
  )
}

export default App;