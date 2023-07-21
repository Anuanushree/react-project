import React  from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Rpassword from './components/Rpassword';
import './App.css'
import Thankyou from './components/thankyou';
import Message from './components/message';



function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path='/register/:resetToken' element={<RegisterForm />} /> */}
        {/* <Route path='/' element={<Rpassword />} /> */}
        <Route path='/' element={<Thankyou />} />
        <Route path='/message' element={<Message />} />
        {/* <Route path='/register' element={<Register />} /> */}

      </Routes>


    </Router>
  )
}

export default App;