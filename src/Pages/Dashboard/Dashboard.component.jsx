import React from 'react';
import './Dashboard.styles.scss';
import Navbar from './../../Components/Navbar/Navbar.component';
import Sidebar from '../../Components/Sidebar/Sidebar.component';
import DashboardMain from '../DashboardMain/DashboardMain.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSidebarState } from '../../Redux/user/user.selectors';


const Dashboard = ({ sidebarHidden }) => {

    let sidebarStyles = {};

    if(sidebarHidden && window.innerWidth < 500) {
        sidebarStyles = {
            transform: 'translateX(.1%)',
            width: '50vw'
        }
    }

    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <Navbar />
            </div>
            <div className="dashboard__sidebar" style={sidebarStyles}>
                <Sidebar />
            </div>
            <div className="dashboard__main">
                <DashboardMain />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sidebarHidden: selectSidebarState
})

export default connect(mapStateToProps) (Dashboard);
