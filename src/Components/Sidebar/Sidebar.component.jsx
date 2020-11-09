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
import Loader from 'react-loader-spinner';
import { toggleSidebar } from './../../Redux/user/user.actions';


const Sidebar = ({ userDetail, currentUser, getUserDetail, isGettingUserDetail, toggleSideBar }) => {

    useEffect(() => {
        const getUser = async () => {
            await getUserDetail(currentUser.uid);
        }
        getUser();
    }, [getUserDetail, currentUser.uid]);

    const closeSideBar = () => {
        if(window.innerWidth < 580) {
            toggleSideBar();
        }
    }

    const sidebarLinks = [
        {
            link: '/',
            icon: <AiFillHome className="sidebar__link-icon" />,
            text: 'Home',
            NoActiveBg: false
        },
        {
            link: '/new-task',
            icon: <AiOutlineAppstoreAdd className="sidebar__link-icon" />,
            text: 'Raise Ticket',
            NoActiveBg: true
        },
        {
            link: '/pending',
            icon: <AiOutlineClockCircle className="sidebar__link-icon" />,
            text: 'Pending',
            NoActiveBg: true
        },
        {
            link: '/due-today',
            icon: <BiCalendarWeek className="sidebar__link-icon" />,
            text: 'Due Today',
            NoActiveBg: true
        },
        {
            link: '/overdue',
            icon: <BiCommentError className="sidebar__link-icon" />,
            text: 'Overdue',
            NoActiveBg: true
        },
        {
            link: '/completed',
            icon: <BiCheckDouble className="sidebar__link-icon" />,
            text: 'Completed',
            NoActiveBg: true
        },
        {
            link: '/register-staff',
            icon: <FiUserPlus className="sidebar__link-icon" />,
            text: 'Register Staff',
            NoActiveBg: true
        }
    ];


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
                        <p className="sidebar__user--text sidebar__user--name">{`${userDetail.firstName} ${userDetail.surname}`}</p>
                        <p className="sidebar__user--text sidebar__user--designation">{userDetail.designation}</p>
                    </div>
                    }
                </div>
            </div>
            <ul className="sidebar__list">
                {sidebarLinks.map(link =>
                    link.NoActiveBg ?
                    <NavLink key={link.text} to={link.link} className="sidebar__link" activeClassName="sidebar__active"
                    onClick={closeSideBar} >
                        {link.icon}
                        <span>{link.text}</span>
                    </NavLink> :
                    <NavLink key={link.text} to={link.link} className="sidebar__link" onClick={closeSideBar} >
                        {link.icon}
                        <span>{link.text}</span>
                    </NavLink>
                )}
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
    getUserDetail: id => dispatch(asyncGetUserDetail(id)),
    toggleSideBar: () => dispatch(toggleSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
