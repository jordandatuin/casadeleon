import {useState} from 'react'

import { Link, NavLink } from "react-router-dom";
import { Squash as Hamburger } from 'hamburger-react'
import WebLogo from '../assets/navbar_assets/CDL Transparent.png'

function Navbar() 
{

  const [isOpen, setOpen] = useState(false);

  return (
    <>
     
      <nav className="navbar fs-5 navbar-expand-md shadow pb-3" style={{backgroundColor: "#ABA8A4"}}>
      <div className="container-fluid">
      <Link to="/">
        <img src={WebLogo} alt="Logo" width="110" height="70" className="navbar_logo"/>
      </Link>
      <div className="navbar-brand fw-bold"></div>
          <span className="navbar-toggler bg-transparent border-0 m-0" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <Hamburger 
                rounded 
                duration={.6}
                label="Show menu"
                hideOutline={false}
                toggled={isOpen} toggle={setOpen} 
             />
          </span>
        <div className="collapse navbar-collapse justify-content-end nav-underline" id="navbarNavAltMarkup">
          <div className="navbar-nav pe-5">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="gallery">Gallery</NavLink>
            <NavLink className="nav-link" to="rates">Rate</NavLink>
            <NavLink className="nav-link" to="location">Location</NavLink>
            <NavLink className="nav-link" to="inquire">Inquire</NavLink>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;