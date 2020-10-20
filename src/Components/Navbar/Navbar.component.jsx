import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineLogout, AiOutlineHome } from 'react-icons/ai';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__header">
                {/* <AiOutlineMenu className="nav__header-icon" /> */}
                {/* <AiOutlineClose className="nav__header-icon" /> */}
                <h1 className="nav__heading">Danbo International School</h1>
            </div><ul className="nav__list">
                <Link to="/" className="nav__link">
                    <span>Home</span>
                    <AiOutlineHome className="nav__link-icon" />
                </Link>
                <Link to="/" className="nav__link">
                    <span>Sign out</span>
                    <AiOutlineLogout className="nav__link-icon" />
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;
