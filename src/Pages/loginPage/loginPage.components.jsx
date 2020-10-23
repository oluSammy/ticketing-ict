import React, { useState } from 'react';
import './loginPage.styles.scss';
import Navbar from './../../Components/Navbar/Navbar.component';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosLogIn } from 'react-icons/io';
import { auth } from './../../firebase/firebase.utils';
import Swal from 'sweetalert2';

const LoginPage = () => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        setUserCredentials({ email: '', password: '' });
        try {
            setIsSigningIn(true);
            await auth.signInWithEmailAndPassword(email, password);
            setIsSigningIn(false);
        } catch (error) {
            setIsSigningIn(false);
            if (error.code === 'auth/user-not-found'){
                setEmailError('User Not Found');

            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Incorrect Password');

            } else if (error.code === 'auth/network-request-failed'){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Network Error',
                    footer: 'Check your network connection'
                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: 'Try Again'
                })
            }
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;
        setUserCredentials({...userCredentials, [name]: value })
    }

    return (
        <div className="login">
            <Navbar />
            <div className="login__box">
                <form className="login__form" onSubmit={handleSubmit} >
                    <div className="login__header">
                        <h2 className="login__heading">Sign In</h2>
                        <IoIosLogIn className="login__header--icon" />
                    </div>
                    <div className="login__form-group">
                        <AiOutlineMail className="login__icon" />
                        <input type="text" className="login__form-input" name="email" id="email"
                        placeholder="Email" onChange={handleChange} />
                        <p className="login__errMsg">{emailError}</p>
                    </div>
                    <div className="login__form-group">
                        <RiLockPasswordLine className="login__icon" />
                        <input type="password" className="login__form-input" name="password" id="password"
                        placeholder="Password"  onChange={handleChange} />
                        <p className="login__errMsg">{passwordError}</p>
                    </div>
                    <div className="login__form-group" style={{textAlign: 'center'}} >
                        {isSigningIn ?
                        <button className="login__submit" >Wait</button> :
                        <input type="submit" value="Sign In" className="login__submit" /> }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
