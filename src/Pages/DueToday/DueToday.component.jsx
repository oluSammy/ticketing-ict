import React, { useEffect } from 'react';
import { BiCalendarWeek } from 'react-icons/bi';
import { connect } from 'react-redux';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';
import { asyncGetDueToday, asyncGetMoreDueToday } from './../../Redux/DueToday/DueToday.actions';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail } from '../../Redux/user/user.selectors';
import { selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import Loader from 'react-loader-spinner';
import { selectDueTodayPrevDoc, selectIsGettingDueToday } from '../../Redux/DueToday/DueToday.selectors';
import TicketLoader from './../../Components/TicketLoader/TicketLoader.component';
import { selectDueTodayTasks } from './../../Redux/DueToday/DueToday.selectors';


const DueToday = ({ getDueToday, userDetail, isGettingUserDetail, isGettingDue, dueToday, prevDoc, getMoreTasks }) => {

    useEffect(() => {
        const getTask = async () => {
            userDetail && await getDueToday(`${userDetail.firstName} ${userDetail.surname}`);
        }
        !dueToday && getTask();
    }, [getDueToday, userDetail, dueToday]);

    const getMoreDueTasks = async () => {
        await getMoreTasks(`${userDetail.firstName} ${userDetail.surname}`, prevDoc);
    }

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Tasks Due Today</h2>
                <BiCalendarWeek className="pending__icon" />
            </div>
            {isGettingUserDetail ?
                <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div> : isGettingDue ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {dueToday && dueToday.map(task => <Ticket key={task.id} ticket={task} type='due-today' />)}
                    {prevDoc !== undefined &&
                    <div onClick={getMoreDueTasks} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    isGettingUserDetail: selectIsGettingUserDetail,
    isGettingDue: selectIsGettingDueToday,
    dueToday: selectDueTodayTasks,
    prevDoc: selectDueTodayPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getDueToday: staffName => dispatch(asyncGetDueToday(staffName)),
    getMoreTasks: (staffName, prevDoc) => dispatch(asyncGetMoreDueToday(staffName, prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (DueToday);
