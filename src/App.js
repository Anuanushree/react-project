import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import List from './components/List'
import List2 from './components/List2'
import List3 from './components/List3';
function ListRight(props) {
  return (
    <>
      <li><span > <i class="fas fa-check"> </i></span>{props.name}</li>
    </>
  )
}
function Btn() {
  return (
    <>
      <a href="http" className="btn btn-primary text-uppercase"> Button</a>
    </>
  )
}
function ListWrong(props) {
  return (
    <>
      <li className="text-muted"><span > <i className="fas fa-times"></i></span> {props.name} </li>
    </>
  )
}
function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                  <h6 className="card-price text-center">$0<span class="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <List ListWrong={ListWrong} ListRight={ListRight} />
                  </ul>
                  <div className="d-grid text-center">
                    <Btn />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                  <h6 className="card-price text-center">$9<span class="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <List2 ListWrong={ListWrong} ListRight={ListRight} />
                  </ul>
                  <div className="d-grid text-center">
                    <Btn />
                  </div>
                </div>''
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 className="card-price text-center">$49<span class="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <List3 ListRight={ListRight} />
                  </ul>
                  <div className="d-grid text-center">
                    <Btn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default App
