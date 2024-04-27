import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SideNavLanding from './component/sidenav'

const NavigationLanding = () => {
  const [openNav, setopenNav] = useState(false);
  return (
    // <!-- header begin -->
    <>
      <header className="navbar navbar-expand-lg navbar-light">
        <div className="container">
         <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
          <span className="material-icons notranslate" style={{marginRight:"20px"}} onClick={() => setopenNav(!openNav)}>menu</span>
            <Link className="navbar-brand" to="/" style={{fontWeight:"bold", fontSize:"30px"}}>
              SignalBlaze
            </Link>
         </div>
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
      <SideNavLanding  openNav={openNav} setopenNav={setopenNav}/>
    </>
  )
}

export default NavigationLanding
