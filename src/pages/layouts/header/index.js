import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
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
                    <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Perfil
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Another action</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Something else here</Link>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;