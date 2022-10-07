import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import './style.css'


const NavBar = () => {

    const activeClass = (({ isActive }) => isActive ? 'current' : 'nav-item')

    return (
        <div className="p-3 navbar-main" id="top-of-page">
            <Navbar collapseOnSelect expand='lg' className="nav">
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavLink className={activeClass} to="/" end>Home</NavLink>
                        <NavLink className={activeClass} to='about'>About me</NavLink>
                        <NavLink className={activeClass} to="projects">Projects</NavLink>
                        <NavLink className={activeClass} to="Contacts">Contacts</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
