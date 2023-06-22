// import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolder, faLaughWink } from '@fortawesome/free-regular-svg-icons';
// import { faChartArea, faCog, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Dashboard() {
    
    return (
        <div>
            <div id='wrapper'>
                <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                            {/* <FontAwesomeIcon icon={faLaughWink}/> */}
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>
                    <hr className="sidebar-divider my-0"></hr>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-address-card"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>List Users</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/create">
                            <i className="fa fa-user"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>Create User</span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-user-edit"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>edit-user  </span>
                        </Link>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/dashboard">
                            <i className="far fa-id-badge"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span> profile </span>
                        </Link>
                    </li>

                    <hr className="sidebar-divider"></hr>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-chalkboard-teacher"></i>
                            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                            <span>edit-profile  </span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Dashboard;
