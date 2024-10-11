import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import logo from "../../images/Logo.jpeg"

const Navbar = () => {

const [showDropdown, setShowDropdown] = useState(false);

const toggleDropdown= ()=>{
    setShowDropdown(!showDropdown);
}

  return (
    <div className='navbar'>
        <div className='navContainer'>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
             <img className='logo' src={logo}/>
            </Link>
            <div className='navItems'>
                <ul>
                    <li>
                        <Link to="/international-courier" style={{ color: "inherit", textDecoration: "none" }}>
                            International courier and cargo
                        </Link>
                    </li>
                    <li>
                        <Link to="/domestic-courier" style={{ color: "inherit", textDecoration: "none" }}>
                            Domestic courier and cargo
                        </Link>
                    </li>
                    <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <span to="/tools" style={{ color: "inherit", textDecoration: "none" , cursor:'pointer'}}>
                            Tools
                        </span>
                        {showDropdown &&
                        (<div className="dropdown">
                                   <Link to="/conversion" style={{ color: "inherit", textDecoration: "none" }}>
                                       Conversion Factor
                                    </Link>
                                    <Link to="/volumetric" style={{ color: "inherit", textDecoration: "none" }}>
                                       Volumetric Weight
                                    </Link>
                                    <Link to="/prohibited" style={{ color: "inherit", textDecoration: "none" }}>
                                       Prohibited Items
                                    </Link>
                        </div>)
                        }
                    </li>
                    <li>
                        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar