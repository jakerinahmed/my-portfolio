import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const NavBar = () => {
    return (

        <div className="p-3 navbar-main" id="top-of-page">
            <ul className="nav">

                <NavLink className='nav-item' to="/" end>Home</NavLink>
                <NavLink className='nav-item' to='about'>About me</NavLink>
                <NavLink className='nav-item' to="projects">Projects</NavLink>
                <NavLink className='nav-item' to="Contacts">Contacts</NavLink>

            </ul>
        </div>

    )
}

export default NavBar
