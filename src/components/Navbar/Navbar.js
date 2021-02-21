import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../images/logo.jpg'

export default function Navbar() {
    return (
        <div style={{height : '8vh' , marginBottom : '5vh'}}>
               <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <a className="navbar-brand" href="/"><img src={Logo} style={{maxWidth : '100px'}} alt="LinkediN" /></a>
              <button className="navbar-toggler border-0" type="button" data-toggle="offcanvas">
                <i className="navbar-toggler__bar navbar-toggler__bar--top" />
                <i className="navbar-toggler__bar navbar-toggler__bar--middle" />
                <i className="navbar-toggler__bar navbar-toggler__bar--bottom" />
              </button>
              {/* Navbar Toggle Button */}
              <div className="offcanvas-collapse ml-auto" id="navbarsExampleDefault">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link">Home</a></Link>
                  </li>
              
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                  </li>

                  <li className="nav-item">
                  <Link to="/contact">
                    <a className="nav-link" >Contact</a></Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/login">
                    <a className="nav-link" >Login</a>
                    </Link>
                  
                  </li>
               
                
                
                </ul>
              </div>
            </div>
          </nav>
          {/* END Navbar */}
        </header>
        </div>
    )
}
