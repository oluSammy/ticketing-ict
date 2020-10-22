import React from 'react'
import MoreButton from '../../Components/MoreButton/MoreButton.component'
import Ticket from '../../Components/Ticket/Ticket.component';
import './Pending.styles.scss';
import { AiOutlineClockCircle } from 'react-icons/ai';

const Pending = () => {
    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Pending Tasks</h2>
                <AiOutlineClockCircle className="pending__icon" />
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

export default Pending
