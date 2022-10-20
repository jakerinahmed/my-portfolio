import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Nav, Navbar } from 'react-bootstrap'
import './style.css'


const NavBar = () => {

    const activeClass = (({ isActive }) => isActive ? 'current' : 'nav-item')

    return (
        <div className="p-3 navbar-main" id="top-of-page">
            <ul className="nav">
                <NavLink className={activeClass} to="/" end>Home</NavLink>
                <NavLink className={activeClass} to='about'>About me</NavLink>
                <NavLink className={activeClass} to="projects">Projects</NavLink>
                <NavLink className={activeClass} to="Contacts">Contacts</NavLink>
            </ul>
        </div>
    )
}

export default NavBar
