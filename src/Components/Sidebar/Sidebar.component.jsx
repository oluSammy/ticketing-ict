import React, { useEffect } from 'react';
import './Sidebar.styles.scss';
import { BiUser, BiCalendarWeek, BiCommentError, BiCheckDouble } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import { AiFillHome, AiOutlineClockCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail } from '../../Redux/user/user.selectors';
import { asyncGetUserDetail } from '../../Redux/user/user.actions';
import { selectCurrentUser, selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import Loader from 'react-loader-spinner'


const Sidebar = ({ userDetail, currentUser, getUserDetail, isGettingUserDetail }) => {

    useEffect(() => {
        const getUser = async () => {
            await getUserDetail(currentUser.uid);
        }
        getUser();
    }, [getUserDetail, currentUser.uid]);

    return (
        <div className="sidebar">
            <div className="sidebar__user">
                <div className="sidebar__user--bg">
                    <BiUser className="sidebar__user--icon"/>
                </div>
                <div>
                    {isGettingUserDetail ?
                        <div className="sidebar__user--text" style={{marginTop: '1.3rem'}}>
                            <Loader
                                type="Oval"
                                color="#FFFFFF"
                                height={30}
                                width={30}
                            />
                        </div> : userDetail &&
                    <div>
                        <p className="sidebar__user--text sidebar__user--name">{`${userDetail.surname} ${userDetail.firstName}`}</p>
                        <p className="sidebar__user--text sidebar__user--designation">{userDetail.designation}</p>
                    </div>
                    }
                </div>
            </div>
            <ul className="sidebar__list">
                <NavLink to="/" className="sidebar__link">
                    <AiFillHome className="sidebar__link-icon" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/new-task" className="sidebar__link" activeClassName="sidebar__active" >
                    <AiOutlineAppstoreAdd className="sidebar__link-icon" />
                    <span>Raise Ticket</span>
                </NavLink>
                <NavLink to="/pending" className="sidebar__link" activeClassName="sidebar__active" >
                    <AiOutlineClockCircle className="sidebar__link-icon" />
                    <span>pending</span>
                </NavLink>
                <NavLink to="/due-today" className="sidebar__link" activeClassName="sidebar__active" >
                    <BiCalendarWeek className="sidebar__link-icon" />
                    <span>Due Today</span>
                </NavLink>
                <NavLink to="/overdue" className="sidebar__link" activeClassName="sidebar__active" >
                    <BiCommentError className="sidebar__link-icon" />
                    <span>Overdue</span>
                </NavLink>
                <NavLink to="/completed" className="sidebar__link" activeClassName="sidebar__active" >
                    <BiCheckDouble className="sidebar__link-icon" />
                    <span>Completed</span>
                </NavLink>
                <NavLink to="/register-staff" className="sidebar__link" activeClassName="sidebar__active" >
                    <FiUserPlus className="sidebar__link-icon" />
                    <span>Register Staff</span>
                </NavLink>
            </ul>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    currentUser: selectCurrentUser,
    isGettingUserDetail: selectIsGettingUserDetail
});

const mapDispatchToProps = dispatch => ({
    getUserDetail: id => dispatch(asyncGetUserDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
