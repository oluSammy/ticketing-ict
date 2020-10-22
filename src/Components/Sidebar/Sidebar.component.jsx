import React from 'react'
import './Sidebar.styles.scss';
import { BiUser, BiCalendarWeek, BiCommentError, BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { AiFillHome, AiOutlineClockCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user--bg">
                    <BiUser className="sidebar__user--icon"/>
                </div>
                <div>
                    <p className="sidebar__user--text sidebar__user--name">Science Teacher</p>
                    <p className="sidebar__user--text sidebar__user--designation">Israel Jacob</p>
                </div>
            </div>
            <ul className="sidebar__list">
                <NavLink to="/" className="sidebar__link">
                    <AiFillHome className="sidebar__link-icon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <AiOutlineAppstoreAdd className="sidebar__link-icon" />
                    <span>Raise Ticket</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <AiOutlineClockCircle className="sidebar__link-icon" />
                    <span>pending</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <BiCalendarWeek className="sidebar__link-icon" />
                    <span>Due Today</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <BiCommentError className="sidebar__link-icon" />
                    <span>Overdue</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Completed</span>
                </NavLink>
                <NavLink to="/" className="sidebar__link">
                    <FiUserPlus className="sidebar__link-icon" />
                    <span>Register Staff</span>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar
