import React from 'react';
import './loginPage.styles.scss';
import Navbar from './../../Components/Navbar/Navbar.component';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogIn } from 'react-icons/io';

const LoginPage = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="login__box">
                <form className="login__form">
                    <div className="login__header">
                        <h2 className="login__heading">Sign In</h2>
                        <IoIosLogIn className="login__header--icon" />
                    </div>
                    <div className="login__form-group">
                        <AiOutlineMail className="login__icon" />
                        <input type="text" className="login__form-input" name="email" id="email" placeholder="Email" />
                        {/* <p className="login__errMsg">User not found</p> */}
                    </div>
                    <div className="login__form-group">
                        <RiLockPasswordLine className="login__icon" />
                        <input type="password" className="login__form-input" name="password" id="password" placeholder="Password" />
                        {/* <p className="login__errMsg">Incorrect Password</p> */}
                    </div>
                    <div className="login__form-group" style={{textAlign: 'center'}} >
                        <input type="submit" value="Sign In" className="login__submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
