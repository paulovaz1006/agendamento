import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { FaCog, FaBell } from 'react-icons/fa';
import './style.css';

const Header = (props) => {

    const toggleMenu = () => {
        const wrapper = document.querySelector('#wrapper');
        wrapper.classList.toggle('toggled');
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-header navbarBox">
            <FiMenu cursor="pointer" color={"#fff"} onClick={toggleMenu} />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#"><FaBell color={"#fff"} fontSize={18}/></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#"><FaCog color={"#fff"} fontSize={18}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><FiLogOut color={"#fff"} fontSize={18}/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;