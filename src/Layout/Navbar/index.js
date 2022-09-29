import React from 'react'
import './style.css'

const NavBar = () => {
    return (

        <div className="p-3 navbar-main" id="top-of-page">
            <ul className="nav justify-content-start">


            <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    About Me
                </li>
                <li className="nav-item">
                    Projects
                </li>
                <li className="nav-item">
                    Contacts
                </li>
            </ul>
        </div>

    )
}

export default NavBar
