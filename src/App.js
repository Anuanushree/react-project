import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
function ListRight(props) {
  return (
    <>
      <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.name}</li>
    </>
  )
}
function Btn(props) {
  return (
    <>
      <a href="http" className="btn btn-primary text-uppercase"> Button</a>
    </>
  )
}
function ListWrong(props) {
  return (
    <>
      <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span> {props.name}</li>
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
                    <ListRight name='Single User' />
                    <ListRight name='5GB Storage' />
                    <ListRight name='Unlimited Public Projects' />
                    <ListRight name='Community Access' />
                    <ListWrong name='Unlimited Private Projects' />
                    <ListWrong name='Dedicated Phone Support' />
                    <ListWrong name='Free Subdomain' />
                    <ListWrong name='Monthly Status Reports' />

                  </ul>
                  <div className="d-grid text-center">
                    <Btn />
                    {/* <a href="htt" class="btn btn-primary text-uppercase">Button</a> */}
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
                    <ListRight name='5 Users' />
                    <ListRight name='50GB Storage' />
                    <ListRight name='Unlimited Public Projects' />
                    <ListRight name='Community Access' />
                    <ListRight name='Unlimited Private Projects' />
                    <ListRight name='Dedicated Phone Support' />
                    <ListRight name='Free Subdomain' />
                    <ListWrong name='Monthly Status Reports' />
                  </ul>
                  <div className="d-grid text-center">
                    <Btn />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 className="card-price text-center">$49<span class="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <ListRight name='Unlimited Users' />
                    <ListRight name='150GB Storage' />
                    <ListRight name='Unlimited Public Projects' />
                    <ListRight name='Community Access' />
                    <ListRight name='Unlimited Private Projects' />
                    <ListRight name='Dedicated Phone Support' />
                    <ListRight name='Unlimited Free Subdomain' />
                    <ListRight name='Monthly Status Reports' />
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
