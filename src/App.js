import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Read from './components/Read';
import Create from './components/create';
import libraryImage from './assets/libraryImage/libraryImages.jpeg'
import Update from './components/Update';
import { useNavigate } from 'react-router-dom';

import './App.css';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(props) {
 const navigate=useNavigate;
  const style = {
    backgroundImage: `url(${libraryImage})`,
    height:'50rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const [library, setLibrary] = useState(props.library);
  return (
    <Router>
      <div style={style}>
        <h1 id="heading">LIBRARY MANAGEMENT</h1>
        {/* <Link to='/read' className='nav'> <button >view-details</button></Link> */}
        <Link to='/create' id='nav'><button className='btn-lg btn-secondary'>Add-user</button></Link>
      <Routes>
        <Route path='/' element={<Read library={library} />} />
        <Route path='/create' element={<Create library={library} setLibrary={setLibrary} />} />
        <Route path='/Update' element={<Update library={library} setLibrary={setLibrary} />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App