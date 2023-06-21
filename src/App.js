
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Dashboard from './dashboard';
import Slidebar from './slidebar';
import Card from './card';
import Color from './color';
import Border from './Border';

import Button from './Button';
import './App.css';

function Sample() {
  return (
    <div>
      <h2>hlooo</h2>
    </div>
  )
}


function App() {

  return (
    <Router>
      <div id="page-top">
        <div id="wrapper">
          <Slidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div >
              <div className="container-fluid">
                <Routes>
                  {/* <Route to='/' element={<Sample />} /> */}
                  <Route path="/cards" element={<Card />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/button' element={<Button />} />
                  <Route path='/borders' element={<Border />} />
                  <Route path='/color' element={<Color />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div >
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2023</span>
          </div>
        </div>
      </footer>
    </Router>
  )
}

export default App