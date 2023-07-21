import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [array, setArray] = useState([]);
    const [users, setusers] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [cpassworderr, setcpassworderr] = useState('');

    const resetToken = useParams().resetToken;
    useEffect(() => {
        axios
            .get(`https://forgot-password-s8z0.onrender.com/api/users`)
            .then(response => setArray(response.data))
            console.log(array)

    }, [])

    useEffect(() => {

        const user = array.find(token => token.resetToken == resetToken);
        if (user) {
            // console.log(user)
            setusers(user)
        }
        else {
            console.log('not found')
        }
    }, [array])

    const navigator = useNavigate();
    const handleregister = async (event) => {
        event.preventDefault();
        console.log('btn clicked');
        if (password != cpassword) {
            return setcpassworderr('password does not match');
        } else {
            try {
                const response = await axios.post(`https://forgot-password-s8z0.onrender.com/api/reset`, { resetToken, password });
                navigator('/thankyou')
            } catch (error) {
                console.error(error.response.data.error)
            }
        }

    }
    return (
        <>
            <section className="vh-120" style={{ backgroundColor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form onSubmit={handleregister}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign up</h5>

                                                <div className="form-outline mb-4">
                                                    <h2> welcome Back {users.username} </h2>

                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >Password</label>
                                                    <input type="password" id="form2Example27"
                                                        value={password}
                                                        onChange={(event) => setpassword(event.target.value)}
                                                        className="form-control form-control-lg" />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <label className="form-label" >confirm-Password</label>
                                                    <input type="password" id="form2Example27"
                                                        value={cpassword}
                                                        onChange={(e) => setCpassword(e.target.value)}
                                                        className="form-control form-control-lg" />
                                                    <p className="text-danger">{cpassworderr}</p>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block"
                                                        type="submit">sign up</button>
                                                </div>

                                                <a href="#!" className="small text-muted">Terms of use.</a>
                                                <a href="#!" className="small text-muted">Privacy policy</a>
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

export default Register;