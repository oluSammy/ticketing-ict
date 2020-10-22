import React from 'react';
import { BiCalendarWeek } from 'react-icons/bi';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';


const DueToday = () => {
    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Tasks Due Today</h2>
                <BiCalendarWeek className="pending__icon" />
            </div>
            <div className="tickets__container">
                <Ticket />
                <Ticket />
                <Ticket />
                <MoreButton />
            </div>
        </div>
    )
}

export default DueToday
