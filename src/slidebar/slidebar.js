import React from 'react';
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFolder, faLaughWink } from '@fortawesome/free-regular-svg-icons';
// import { faChartArea, faCog, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Slidebar() {
    return (
        <div>
            <div id='wrapper'>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
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

                    <div className="sidebar-heading">
                        Interface
                    </div>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="http" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            {/* <FontAwesomeIcon icon={faCog}/> */}
                            <span>Components</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <Link className="collapse-item" to="button">Button</Link>
                                <Link className="collapse-item" to="cards">Cards</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="http" data-toggle="collapse" data-target="#collapseUtilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            {/* <FontAwesomeIcon icon={faWrench}/> */}
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                            data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <Link className="collapse-item" to="color">Colors</Link>
                                <Link className="collapse-item" to="borders">Borders</Link>
                            </div>
                        </div>

                    </li>
                    <hr className="sidebar-divider d-none d-md-block" />

                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                    <div className="sidebar-card d-none d-lg-flex">
                        <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt=''/>
                            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Slidebar;