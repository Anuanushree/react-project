import React, { useState } from 'react'
import Read from './components/Read';
import Create from './components/create';
import Update from './components/Update';
import {Link, BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {

const[library,setLibrary]= useState([]);
  return (
    <Router>
      <Link to='/'> read</Link>
      <Link to='/create'> create</Link>
      <Routes>
        <Route path='/' element={<Read library={library}/>}/>
        <Route path='/create' element={<Create library={library} setLibrary={setLibrary} />} />
        <Route path='/Update' element={<Update library={library} setLibrary={setLibrary} />}/>
      </Routes>
    </Router>
  )
}

export default App