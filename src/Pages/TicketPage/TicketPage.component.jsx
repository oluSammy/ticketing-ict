import React from 'react';
import './TicketPage.styles.scss';

const TicketPage = () => {
    return (
        <div className="ticket-page">
            <div className="ticket-page__header">
                <div className="ticket-page__header-icon">&#10021;</div>
                <div className="ticket-page__header-text">Ticket</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Title:</h6>
                <div className="ticket-page__key">Title Lorem, ipsum.</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Task:</h6>
                <div className="ticket-page__key">task Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Raised By:</h6>
                <div className="ticket-page__key">Barack Obama.</div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Status:</h6>
                <div className="ticket-page__key">
                    <div className="ticket-page__text">Uncompleted</div>
                </div>
            </div>
            <div className="ticket-page__content">
                <h6 className="ticket-page__label">Deadline:</h6>
                <div className="ticket-page__key">22-11-2020</div>
            </div>
        </div>
    )
}

export default TicketPage;
