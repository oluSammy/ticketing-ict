import React, { useEffect } from 'react';
import MoreButton from '../../Components/MoreButton/MoreButton.component'
import Ticket from '../../Components/Ticket/Ticket.component';
import './Pending.styles.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { asyncGetMorePending, asyncGetPending } from './../../Redux/Pending/Pending.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail } from '../../Redux/user/user.selectors';
import TicketLoader from './../../Components/TicketLoader/TicketLoader.component';
import { selectIsGettingPending, selectPendingTasks, selectPendingPrevDoc } from './../../Redux/Pending/Pending.selecors';
import { selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import Loader from 'react-loader-spinner';
import EmptyTasks from './../../Components/EmptyTasks/EmptyTasks.component';

const Pending = ({ userDetail, getPendingTasks, pendingTasks, isGettingPending,
    isGettingUserDetail, getMorePendingTasks, prevDoc }) => {

    useEffect(() => {
        const getTasks = async () => {
            await getPendingTasks(`${userDetail.firstName} ${userDetail.surname}`);
        }
        userDetail && !pendingTasks && getTasks();
    }, [userDetail, getPendingTasks, pendingTasks]);

    const getMoreTasks = async () => {
        await getMorePendingTasks(`${userDetail.firstName} ${userDetail.surname}`, prevDoc);
    }

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Pending Tasks</h2>
                <AiOutlineClockCircle className="pending__icon" />
            </div>
            {isGettingUserDetail ?
                <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div>
            : isGettingPending ?
            <div className="tickets__container">
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
                <TicketLoader />
            </div> :
            <div className="tickets__container">
                {pendingTasks && pendingTasks.map(task => <Ticket key={task.id} ticket={task} type="pending" />)}
                {pendingTasks && pendingTasks.length >= 20 && prevDoc !== undefined &&
                <div onClick={() => getMoreTasks()} style={{display: 'flex', justifyContent: 'center'}} >
                    <MoreButton />
                </div>}
            </div>}
            {pendingTasks && !pendingTasks.length &&
            <div className="empty-task-container">
                <EmptyTasks title='pending' />
            </div>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    isGettingPending: selectIsGettingPending,
    pendingTasks: selectPendingTasks,
    isGettingUserDetail: selectIsGettingUserDetail,
    prevDoc: selectPendingPrevDoc
})

const mapDispatchToProps = dispatch => ({
    getPendingTasks: staffName => dispatch(asyncGetPending(staffName)),
    getMorePendingTasks: (staffName, prevDoc) => dispatch(asyncGetMorePending(staffName, prevDoc))
});

export default connect(mapStateToProps, mapDispatchToProps) (Pending)
