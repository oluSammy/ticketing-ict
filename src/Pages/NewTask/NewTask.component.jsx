import React from 'react';
import './NewTask.styles.scss';
import { IoIosCreate } from 'react-icons/io';

const NewTask = () => {
    return (
        <div className="new-task">
            <div className="new-task__header">
                <h2 className="new-task__heading">Raise A Ticket</h2>
                <IoIosCreate className="new-task__heading-icon" />
            </div>
            <form className="new-task__form">
                <div className="new-task__form-group">
                    <label htmlFor="name" className="new-task__label">Name:</label>
                    <input type="text" className="new-task__input" id="name" name="name" required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="email" className="new-task__label">Email:</label>
                    <input type="email" className="new-task__input" id="email" name="email" required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="designation" className="new-task__label">Designation:</label>
                    <input type="text" className="new-task__input" id="designation" name="designation" required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="title" className="new-task__label">Title:</label>
                    <input type="text" className="new-task__input" id="title" name="title" required />
                </div>
                <div className="new-task__form-group">
                    <label htmlFor="task" className="new-task__label">Task:</label>
                    <textarea className="new-task__input" name="task" id="task" cols="30" rows="4" required
                    style={{padding: '1rem', fontSize: '1.9rem'}} />
                </div>
                <input type="submit" value="Submit" className="new-task__btn" />
            </form>
        </div>
    )
}

export default NewTask;
