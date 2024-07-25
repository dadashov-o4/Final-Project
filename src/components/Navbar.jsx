import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container-fluid">
                    <div className="logoDiv d-flex align-items-center justify-content-center px-4">
                        <Link className='text-decoration-none' to="/">
                            <img className='logo me-0' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1717839800/logo_divq7y.png" alt="Logo"/>
                            <span>TEAMHOST</span>
                        </Link>
                    </div>
                    <form className="d-flex search ms-4" role="search">
                        <div className="search-container d-flex align-items-center">
                            <input
                                className="form-control me-2 bg-body-tertiary"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            
                            <span>
                                <i className="fa-solid fa-microphone"></i>
                            </span>
                        </div>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item dropdown me-3">
                                <a className="nav-link dropdown-toggle text-uppercase UK-text" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='me-2' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1717843818/united-kingdom_zmhsfx.png" alt="United Kingdom flag" />English
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">
                                        <img className='me-2' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1717848208/germany_shqb0c.png" alt="Germany flag" /> Germany</a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <img className='me-2' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1717848213/italy_ve0ra4.png" alt="Italy flag" />Italy</a></li>
                                </ul>
                            </li>
                            <li className="nav-item d-flex align-items-center me-1">
                                <span className="icon-container">
                                    <i className="fa-solid fa-comment-dots"></i>
                                    <div className="notification-dot"></div>
                                </span>
                            </li>
                            <li className="nav-item d-flex align-items-center mx-3">
                                <span className="icon-container">
                                    <i className="fa-solid fa-bell"></i>
                                    <div className="notification-dot"></div>
                                </span>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='avatarLogo me-2' src="https://res.cloudinary.com/dlsupk9sb/image/upload/v1717839065/profile_kxy6qb.png" alt="avatar" /> Hi, Jack
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
