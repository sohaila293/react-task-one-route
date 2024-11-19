import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-bootstrap'
import { useState } from 'react';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav>
      <div className='container'>
        <div className='logo'>
          <span>Start Framework</span>
        </div>
        <div className='content'>
          <ul className={menuOpen ? "show" : ""}>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className='media onClick={() => setMenuOpen(!menuOpen)}'>
        <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
    </>
  )
}
