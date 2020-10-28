import React from 'react';
import './Ticket.styles.scss';
import { Link } from 'react-router-dom';
import { dateBeforeDeadline } from '../../utility-functions/timestampToDate';
import { timeStampToDate } from './../../utility-functions/timestampToDate';
import { limitSentence } from './../../utility-functions/limitSentence';


const Ticket = ({ ticket, type }) => {
    const { createdAt, deadline, title, task, senderName, completed } = ticket.data
    return (
        <Link to={`/ticket/${ticket.id}`} className="ticket">
            <div className="ticket__header">
                {completed ?
                <h4 className="ticket__status">Completed <span></span> </h4> :
                <h4 className="ticket__status">Incomplete <span></span> </h4>
                }
                <div className="ticket__assigned-to">
                    <span>Assigned To &rarr; </span>
                    <h6 className="ticket__staff-assigned">Me</h6>
                </div>
            </div>
            <h3 className="ticket__title">{title}</h3>
            <p className="ticket__content">{limitSentence(task)}</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by </span>
                <h3 className="ticket__sender-name">{senderName}</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - {timeStampToDate(createdAt)}</h5>
                <h6 className="ticket__assigned">{dateBeforeDeadline(deadline)}</h6>
            </div>
        </Link>
    )
}

export default Ticket
