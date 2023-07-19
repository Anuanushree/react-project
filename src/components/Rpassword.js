import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

function Rpassword() {

    const [email, setEmail] = useState('')

    const handlesubmit = async (event) => {
        event.preventDefault();
        console.log('btn clicked');
        console.log(email)
        try {
            const response = await axios.post('http://localhost:3001/api/users/reset', { email });
        } catch (error) {
            console.error(error.response.data.error)
        }
    }
    return (

        <>
            <section className="vh-140" style={{ backgroundColor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form >

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h2 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Forgot Password?</h2>
                                                <h5 className="fw-normal mb-3 pb-3">You can reset your password here.</h5>
                                                <div className="form-outline mb-4">

                                                    <input type="email" id="form2Example17"

                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                        className="form-control form-control-lg" />
                                                    <label className="form-label" >Email address</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                        onClick={handlesubmit}
                                                        type="button">Reset your password</button>
                                                </div>

                                                <a className="small text-muted">Terms of use.</a>
                                                <a className="small text-muted">Privacy policy</a>
                                            </form>

                                        </div>
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

export default Rpassword