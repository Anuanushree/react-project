
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Dashboard from './components/menu';
import Slidebar from './slidebar/slidebar'
import Card from './components/card';
import Color from './components/color';
import Border from './components/Border';
import Button from './components/Button';
import './App.css';



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
                  <Route path='/' element={<Dashboard />} />
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