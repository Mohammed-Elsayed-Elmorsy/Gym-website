import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <header className=''>
            <div className="logo">
                <img src={logo} alt={"logo-image"} />
            </div>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#home">plans</a>
                </li>
                <li>
                    <a href="#home">Why Us</a>
                </li><li>
                    <a href="#home">Programs</a>
                </li>
                <li>
                    <a href="#home">Testmonials</a>
                </li>
            </ul>
        </header>
    )
}

export default Header