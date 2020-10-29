import React, { useEffect } from 'react';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';
import { BiCheckDouble } from 'react-icons/bi'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail } from '../../Redux/user/user.selectors';
import { asyncGetCompleted, asyncGetMoreCompleted } from './../../Redux/Completed/Completed.actions';
import { selectCompletedTasks, selectIsGettingCompleted, selectCompletedPrevDoc } from './../../Redux/Completed/completed.selectors';
import { selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import Loader from 'react-loader-spinner';
import TicketLoader from './../../Components/TicketLoader/TicketLoader.component';
import EmptyTasks from './../../Components/EmptyTasks/EmptyTasks.component';

const Completed = ({ getCompletedTasks, userDetail, completed, isGettingUserDetail,
    isGettingCompleted, prevDoc, getMoreCompletedTasks }) => {
    useEffect(() => {
        const getTasks = async () => {
            userDetail && await getCompletedTasks(`${userDetail.firstName} ${userDetail.surname}`)
        }
        !completed && getTasks();
    }, [userDetail, getCompletedTasks, completed]);
    const getMoreTasks = async () => {
        await getMoreCompletedTasks(`${userDetail.firstName} ${userDetail.surname}`, prevDoc)
    }
    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Completed Tasks</h2>
                <BiCheckDouble className="pending__icon" />
            </div>
            {isGettingUserDetail ? <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div> : isGettingCompleted ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {completed && completed.map(task => <Ticket key={task.id} ticket={task} type='completed' />)}
                    {prevDoc !== undefined ?
                    <div onClick={getMoreTasks} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div> : ''}
                </div>}
                {completed && !completed.length &&
                <div className="empty-task-container">
                    <EmptyTasks title='completed' />
                </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    completed: selectCompletedTasks,
    isGettingUserDetail: selectIsGettingUserDetail,
    isGettingCompleted: selectIsGettingCompleted,
    prevDoc: selectCompletedPrevDoc
});

const mapDispatchToProps = dispatch => ({
    getCompletedTasks: staffName => dispatch(asyncGetCompleted(staffName)),
    getMoreCompletedTasks: (staffName, prevDoc) => dispatch(asyncGetMoreCompleted(staffName, prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Completed);
