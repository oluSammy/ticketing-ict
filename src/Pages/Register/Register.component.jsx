import React, { useState } from 'react';
import './Register.styles.scss';
import { FiUserPlus } from 'react-icons/fi';
import { connect } from 'react-redux';
import { asyncRegisterStaff } from './../../Redux/Register/register.actions';

const Register = ({ registerStaff }) => {

    const [staff, setStaff] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPass: '',
    school: '', designation: '', passwordLengthErr: '', confirmPassErr: '' });

    const handleChange = e => {
        const {value, id} = e.target;
        setStaff({ ...staff, [id]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if(staff.password.length < 5) {
            setStaff({ ...staff, confirmPassErr: '', passwordLengthErr: 'Password must be at least 6 characters' });
            return;
        }
        if(staff.password !== staff.confirmPass) {
            setStaff({ ...staff, confirmPassErr: 'passwords do not match', passwordLengthErr: '' });
            return;
        }

        await registerStaff(staff);
        setStaff(staff => ({ ...staff, firstName: '', lastName: '', email: '', password: '', confirmPass: '',
        school: '', designation: '', passwordLengthErr: '', confirmPassErr: '' }));
    };

    return (
        <div className="register">
            <div className="register__header">
                <h2 className="register__heading">Register Staff</h2>
                <FiUserPlus className="register__icon" />
            </div>
            <form onSubmit={handleSubmit} className="register__form">
                <div className="register__form-group">
                    <label htmlFor="firstName" className="register__label">First Name:</label>
                    <input onChange={handleChange} type="text" className="register__input" id="firstName"
                    required value={staff.firstName} />
                </div>
                <div className="register__form-group">
                    <label htmlFor="lastName" className="register__label">Last Name:</label>
                    <input onChange={handleChange} type="text" className="register__input" id="lastName"
                    required value={staff.lastName} />
                </div>
                <div className="register__form-group">
                    <label htmlFor="email" className="register__label">Email:</label>
                    <input onChange={handleChange} type="email" className="register__input" id="email"
                    required value={staff.email} />
                </div>
                <div className="register__form-group">
                    <label htmlFor="password" className="register__label">Password:</label>
                    <div>
                        <input onChange={handleChange} type="password" className="register__input" id="password"
                        required value={staff.password} />
                        <p className="register__err-msg">{staff.passwordLengthErr}</p>
                    </div>
                </div>
                <div className="register__form-group">
                    <label htmlFor="confirmPass" className="register__label">Confirm Password:</label>
                    <div>
                        <input onChange={handleChange} type="password" className="register__input" id="confirmPass"
                        required value={staff.confirmPass} />
                        <p className="register__err-msg">{staff.confirmPassErr}</p>
                    </div>
                </div>
                <div className="register__form-group">
                    <label htmlFor="school" className="register__label">School:</label>
                    <select onChange={handleChange} id="school" value={staff.school}
                    className="register-staff__input register-staff__select register__input" >
                        <option value="" className="register-staff__option">Select School</option>
                        <option value="college" className="register-staff__option">College</option>
                        <option value="primary" className="register-staff__option">Primary</option>
                        <option value="nursery" className="register-staff__option">Nursery</option>
                        <option value="sixthForm " className="register-staff__option">Sixth Form</option>
                    </select>
                </div>
                <div className="register__form-group">
                    <label htmlFor="designation" className="register__label">Designation:</label>
                    <input onChange={handleChange} type="text" className="register__input" id="designation"
                    required value={staff.designation} />
                </div>
                <input type="submit" value="Register" className="register__btn" />
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    registerStaff: staff => dispatch(asyncRegisterStaff(staff))
})

export default connect(null, mapDispatchToProps) (Register);
