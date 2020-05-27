import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { FaUser, FaCog } from 'react-icons/fa';
import './style.css';

const Header = (props) => {

    const toggleMenu = () => {
        const wrapper = document.querySelector('#wrapper');
        wrapper.classList.toggle('toggled');
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white navbarBox">
            <FiMenu cursor="pointer" onClick={toggleMenu} />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#"><FaUser fontSize={20}/></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#"><FaCog fontSize={20}/></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/"><FiLogOut fontSize={20}/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;