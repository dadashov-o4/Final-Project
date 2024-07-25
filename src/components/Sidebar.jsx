import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import 'boxicons/css/boxicons.min.css';

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar-container ${isClosed ? 'sidebar-closed' : 'sidebar-open'}`}>
      <nav className={`sidebar ${isClosed ? 'close' : ''}`}>
        {!isMobile && (
          <header>
            <i className='bx bx-chevron-right toggle' onClick={toggleSidebar} />
          </header>
        )}
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links ps-0">
              <li className="nav-link">
                <Link to="/">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text" data-notification="3">Home</span>
                </Link>
              </li>
              <li className='menu-header ms-3'>
                <span className='text nav-text headerSpan'>Account</span>
              </li>
              <li className="nav-link">
                <Link to="/profile">
                  <i className='fa-regular fa-user icon'></i>
                  <span className="text nav-text" data-notification="4">Profile</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/favourites">
                  <i className='fa-regular fa-heart icon'></i>
                  <span className="text nav-text" data-notification="8">Favourites</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/Friends">
                  <i className='bx bx-group icon'></i>
                  <span className="text nav-text" data-notification="12">Friends</span>
                </Link>
              </li>
              <li className='menu-header ms-3'>
                <span className='text nav-text headerSpan'>Main</span>
              </li>
              <li className="nav-link">
                <Link to="/help">
                  <i className='fa-solid fa-question icon'></i>
                  <span className="text nav-text help">Help</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li>
              <a href="#">
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text logout">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
      {isMobile && (
        <div className="mobile-toggle" onClick={toggleSidebar}>
          <i className={`bx ${isClosed ? 'bx-menu' : 'bx-x'}`}></i>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
