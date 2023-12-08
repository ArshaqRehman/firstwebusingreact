import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            <img src="image.png" className="rounded nav-link active" alt="World Jobs" style={{ width: "60px", height: "60px" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Jobs
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/overseas" className="dropdown-item">Overseas Jobs</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/pakistanijobs" className="dropdown-item">Pakistani Jobs</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link to="/Remotejobs" className="dropdown-item">Remote Jobs</Link></li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/privacypolicy" className="nav-link">Privacy Policy</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/ToplistedProfessionals" className="nav-link">Hire</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{ marginRight: "450px", width: "420px" }}>
              <input className="form-control me-2" type="search" placeholder="Find Jobs" aria-label="Search" />
            </form>
            <div style={{ marginLeft: "-280px" }}>
              
              <Link to="/dashboard">
                <button type="button" className="btn btn-primary" style={{ margin: "4px" }}>Dashboard</button>
              </Link>
              <Link to="/login">
              <button type="button" className="btn btn-danger" style={{ margin: "4px" }}>Login/signup</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
