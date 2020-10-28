import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './TicketPage.styles.scss';
import { createStructuredSelector } from 'reselect';
import { asyncCompleteTask, asyncGetTicket } from './../../Redux/Ticket/ticket.actions';
import { selectIsGettingTicket } from '../../Redux/Ticket/ticket.selectors';
import { selectCurrentTicket } from './../../Redux/Ticket/ticket.selectors';
import Loader from 'react-loader-spinner';
import { dateBeforeDeadline } from '../../utility-functions/timestampToDate';
import { timeStampToDate } from './../../utility-functions/timestampToDate';

const TicketPage = ({ getCurrentTicket, isGettingTicket, ticket, completeTask }) => {
    let { id } = useParams();

    useEffect(() => {
        const getTicket = async () => {
            await getCurrentTicket(id)
        }
        getTicket();
    }, [getCurrentTicket, id]);

    return (
        <>
        {isGettingTicket ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25vh' }}>
                    <Loader
                        type="Circles"
                        color="#0A0A56"
                        height={75}
                        width={75}
                    />
            </div> : ticket &&
            <div className="ticket-page">
                <div className="ticket-page__header">
                    <div className="ticket-page__header-icon">&#10021;</div>
                    <div className="ticket-page__header-text">Ticket</div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Title:</h6>
                    <div className="ticket-page__key">{ticket.title}</div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Task:</h6>
                    <div className="ticket-page__key">{ticket.task}</div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Raised By:</h6>
                    <div className="ticket-page__key">{ticket.senderName}</div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Status:</h6>
                    <div className="ticket-page__key">
                        {ticket.completed ?
                        <div className="ticket-page__text">Completed</div> :
                        <div className="ticket-page__text">InComplete</div>}
                        {!ticket.completed && <button onClick={() => completeTask(id)} className="ticket-page__complete-btn">
                            Mark as complete</button>}
                    </div>
                </div>
                <div className="ticket-page__content">
                    <h6 className="ticket-page__label">Deadline:</h6>
                    {ticket.completed ?
                    <div className="ticket-page__key">{timeStampToDate(ticket.deadline)}</div> :
                    <div className="ticket-page__key">{dateBeforeDeadline(ticket.deadline)}</div>
                    }
                </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    isGettingTicket: selectIsGettingTicket,
    ticket: selectCurrentTicket
});

const mapDispatchToProps = dispatch => ({
    getCurrentTicket: id => dispatch(asyncGetTicket(id)),
    completeTask: id => dispatch(asyncCompleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (TicketPage);
