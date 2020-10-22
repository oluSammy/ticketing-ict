import React from 'react';
import MoreButton from '../../Components/MoreButton/MoreButton.component';
import Ticket from './../../Components/Ticket/Ticket.component';
import { BiCheckDouble } from 'react-icons/bi'

const Completed = () => {
    return (
        <div className="pending">
            <div className="pending__header">
                <h2 className="pending__heading">Completed Tasks</h2>
                <BiCheckDouble className="pending__icon" />
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

export default Completed
