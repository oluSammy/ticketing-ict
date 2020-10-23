import React from 'react';
import './Register.styles.scss';
import { FiUserPlus } from 'react-icons/fi';

const Register = () => {
    return (
        <div className="register">
            <div className="register__header">
                <h2 className="register__heading">Register Staff</h2>
                <FiUserPlus className="register__icon" />
            </div>
            <form className="register__form">
                <div className="register__form-group">
                    <label htmlFor="name" className="register__label">First Name:</label>
                    <input type="text" className="register__input" id="name" required />
                </div>
                <div className="register__form-group">
                    <label htmlFor="surname" className="register__label">Last Name:</label>
                    <input type="text" className="register__input" id="surname" required />
                </div>
                <div className="register__form-group">
                    <label htmlFor="email" className="register__label">Email:</label>
                    <input type="email" className="register__input" id="email" required />
                </div>
                <div className="register__form-group">
                    <label htmlFor="password" className="register__label">Password:</label>
                    <input type="password" className="register__input" id="password" required />
                </div>
                <div className="register__form-group">
                    <label htmlFor="confirmPass" className="register__label">Confirm Password:</label>
                    <input type="text" className="register__input" id="confirmPass" required />
                </div>
                <div className="register__form-group">
                    <label htmlFor="school" className="register__label">School:</label>
                    <select id="school" className="register-staff__input register-staff__select register__input" >
                        <option value="" className="register-staff__option">Select School</option>
                        <option value="college" className="register-staff__option">College</option>
                        <option value="primary" className="register-staff__option">Primary</option>
                        <option value="nursery" className="register-staff__option">Nursery</option>
                        <option value="sixthForm " className="register-staff__option">Sixth Form</option>
                    </select>
                </div>
                <div className="register__form-group">
                    <label htmlFor="designation" className="register__label">Designation:</label>
                    <input type="text" className="register__input" id="designation" required />
                </div>
                <input type="submit" value="Register" className="register__btn" />
            </form>
        </div>
    )
}

export default Register
