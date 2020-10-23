import React, { useEffect } from 'react';
import './App.scss';
import LoginPage from './Pages/loginPage/loginPage.components';
import Dashboard from './Pages/Dashboard/Dashboard.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/user/user.selectors';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './Redux/user/user.actions';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function App({ user, setCurrentUser }) {

  useEffect(() => {
    auth.onAuthStateChanged(user => setCurrentUser(user));
  }, [user, setCurrentUser])

  return (
    <div className="App">
      {user ? <Dashboard />  : <LoginPage />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
