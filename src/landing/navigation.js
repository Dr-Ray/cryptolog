import React from 'react'
import { Link } from 'react-router-dom'

const NavigationLanding = () => {
  return (
    // <!-- header begin -->
    <header className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="img/logo.png" alt="logo" width="160" height="67" className="d-inline-block" />
        </Link>
        <div className="collapse navbar-collapse d-flex justify-content-between d-none d-xl-block" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/market">Markets</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/education">Academy</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Support</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/terms">Terms</Link></li>

          </ul>
          <div className="optional-link d-flex align-items-center ms-4 d-none d-xl-block">
            <Link to="/login" className="btn btn-link me-3">
              <i className="fas fa-circle-user"></i>Login
            </Link>
            <Link to="/register" className="btn btn-info">Register</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavigationLanding
