import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHome.styles.scss';
import { AiFillHome, AiOutlineClockCircle, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BiCalendarWeek, BiCommentError, BiCheckDouble } from 'react-icons/bi';

const DashboardHome = () => {
    return (
        <div className="dashboardHome">
            <div className="dashboardHome__container">
                <Link className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Raise Ticket</div>
                        <AiOutlineAppstoreAdd className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#10021;</div>
                </Link>
                <Link className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Pending</div>
                        <AiOutlineClockCircle className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9775;</div>
                </Link>
                <Link className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Due Today</div>
                        <BiCalendarWeek className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9854;</div>
                </Link>
                <Link className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Overdue</div>
                        <BiCommentError className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9853;</div>
                </Link>
                <Link className="dashboardHome__box">
                    <div className="dashboardHome__box--header">
                        <div className="dashboardHome__box--title">Completed</div>
                        <BiCheckDouble className="dashboardHome__box--icon" />
                    </div>
                    <div className="dashboardHome__box--symbol">&#9769;</div>
                </Link>
            </div>
        </div>
    )
}

export default DashboardHome
