import React from 'react';
import './nav.css'; // Ensure you create this CSS file for custom styling

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light transparent-navbar">
      <div className="container-fluid">
       
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
