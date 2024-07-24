import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import 'boxicons/css/boxicons.min.css';


const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  

  return (
<div className={`body  ${isClosed ? 'sidebar-closed' : 'sidebar-open'}`}>      <nav className={`sidebar ${isClosed ? 'close' : ''}`}>
        <header>
          <i className='bx bx-chevron-right toggle' onClick={toggleSidebar} />
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links ps-0">
              <li className="nav-link">
                <Link to="/">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Home</span>
                </Link>
              </li>
              <li className='menu-header ms-3'>
              <li className='sidebar-header'></li>
                <span className='text nav-text headerSpan'>Account</span></li>
              <li className="nav-link">
                <Link to="/profile">
                  <i className='fa-regular fa-user icon'></i>
                  <span className="text nav-text">Profile</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/favourites">
                  <i className='fa-regular fa-heart icon'></i>
                  <span className="text nav-text">Favourites</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Friends">
                  <i className='bx bx-group icon'></i>
                  <span className="text nav-text">Friends</span>
                </Link>
              </li>
              
              <li className='menu-header ms-3'>
                <span className='text nav-text headerSpan'>Main</span>
                </li>
             
              <li className="nav-link">
                <Link to="/help">
                  <i className='fa-solid fa-question icon'></i>
                  <span className="text nav-text">Help</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li>
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
