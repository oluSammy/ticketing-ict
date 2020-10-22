import React from 'react';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';
import { BiCommentError } from 'react-icons/bi'

const Overdue = () => {
    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Overdue Tasks</h2>
                <BiCommentError className="pending__icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <MoreButton />
            </div>
        </div>
    )
}

export default Overdue
