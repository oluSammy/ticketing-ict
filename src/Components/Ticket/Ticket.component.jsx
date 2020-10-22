import React from 'react';
import './Ticket.styles.scss';
import { BiCheckDouble } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Ticket = () => {
    return (
        <Link to="/" className="ticket">
            <div className="ticket__header">
                <h4 className="ticket__status">Resolved <span></span> </h4>
                <div className="ticket__assigned-to">
                    <span>Assigned To &rarr; </span>
                    <h6 className="ticket__staff-assigned">Olu Jacobs</h6>
                </div>
            </div>
            <h3 className="ticket__title">Title of the ticket</h3>
            <p className="ticket__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut.</p>
            <div className="ticket__sender">
                <span className="ticket__raised-by ticket__symbol">Raised by </span>
                <h3 className="ticket__sender-name">Sender Name</h3>
            </div>
            <div className="ticket__details">
                <h5 className="ticket__created">Created - 12-09-21</h5>
                <h6 className="ticket__assigned">19 days before deadline</h6>
            </div>
        </Link>
    )
}

export default Ticket
