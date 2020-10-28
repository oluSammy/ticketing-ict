import React, { useEffect } from 'react';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';
import { BiCommentError } from 'react-icons/bi'
import { connect } from 'react-redux';
import { asyncGetMoreOverdue, asyncGetOverdue } from './../../Redux/Overdue/overdue.actions';
import { createStructuredSelector } from 'reselect';
import { selectUserDetail } from '../../Redux/user/user.selectors';
import { selectOverdueTasks, selectOverDuePrevDoc, isGettingOverdueTasks } from './../../Redux/Overdue/overdue.selectors';
import { selectIsGettingUserDetail } from './../../Redux/user/user.selectors';
import Loader from 'react-loader-spinner';
import TicketLoader from '../../Components/TicketLoader/TicketLoader.component';

const Overdue = ({ getOverdueTasks, userDetail, overDueTasks, isGettingUserDetail,
    prevDoc, isGettingOverdue, getMoreOverdue }) => {

    useEffect(() => {
        const getTask = async () => {
            userDetail && await getOverdueTasks(`${userDetail.firstName} ${userDetail.surname}`);
        }
        !overDueTasks && getTask();

    }, [getOverdueTasks, userDetail, overDueTasks]);

    const getMoreTasks = async () => {
        await getMoreOverdue(`${userDetail.firstName} ${userDetail.surname}`, prevDoc)
    }

    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Overdue Tasks</h2>
                <BiCommentError className="pending__icon" />
            </div>
                {isGettingUserDetail ?
                <div className="sidebar__user--text" style={{marginTop: '5.3rem'}}>
                    <Loader
                        type="Oval"
                        color="#0A0A56"
                        height={70}
                        width={70}
                    />
                </div> : isGettingOverdue ?
                <div className="tickets__container">
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                    <TicketLoader />
                </div> :
                <div className="tickets__container">
                    {overDueTasks && overDueTasks.map(task => <Ticket key={task.id} ticket={task} type='overdue' />)}
                    {prevDoc !== undefined &&
                    <div onClick={getMoreTasks} style={{display: 'flex', justifyContent: 'center'}} >
                        <MoreButton />
                    </div>}
                </div>
                }
                {/* <MoreButton /> */}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userDetail: selectUserDetail,
    overDueTasks: selectOverdueTasks,
    isGettingUserDetail: selectIsGettingUserDetail,
    prevDoc: selectOverDuePrevDoc,
    isGettingOverdue: isGettingOverdueTasks
});

const mapDispatchToProps = dispatch => ({
    getOverdueTasks: staffName => dispatch(asyncGetOverdue(staffName)),
    getMoreOverdue: (staffName, prevDoc) => dispatch(asyncGetMoreOverdue(staffName, prevDoc))
})

export default connect(mapStateToProps, mapDispatchToProps) (Overdue);
