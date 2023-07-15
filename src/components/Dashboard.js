// import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Dashboard() {
    
    return (
        <div>
            <div id='wrapper'>
                <ul className="navbar-nav bg-gradient bg sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                            {/* <FontAwesomeIcon icon={faLaughWink}/> */}
                        </div>
                        <div className="sidebar-brand-text mx-3">Admin</div>
                    </a>
            
                   <br/><br/>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <i className="far fa-id-badge"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>Create-user</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/list">
                            <i className="fas fa-address-card"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>List Users</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/edit">
                            <i className="fas fa-user-edit"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>  Edit-user  </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
