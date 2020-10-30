import React from 'react';
import './Navbar.styles.scss';
import { AiOutlineLogout, AiOutlineHome } from 'react-icons/ai';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser, selectSidebarState } from './../../Redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleSidebar } from './../../Redux/user/user.actions';

const Navbar = ({ user, toggleSidebar, sidebarIsOpen }) => {
    return (
        <div className="nav">
            <div className="nav__header">
                {user &&
                <>
                {sidebarIsOpen ?
                    <AiOutlineClose onClick={() => toggleSidebar()} className="nav__header-icon" /> :
                    <AiOutlineMenu onClick={() => toggleSidebar()} className="nav__header-icon" />}
                </>}
                <h1 className="nav__heading">Danbo International School</h1>
            </div>
            {user &&
            <ul className="nav__list">
                <Link to="/" className="nav__link">
                    <span>Home</span>
                    <AiOutlineHome className="nav__link-icon" />
                </Link>
                <li onClick={() => auth.signOut()} className="nav__link">
                    <span>Sign out</span>
                    <AiOutlineLogout className="nav__link-icon" />
                </li>
            </ul>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    sidebarIsOpen: selectSidebarState
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);
