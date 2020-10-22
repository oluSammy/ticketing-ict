import React from 'react';
import './Dashboard.styles.scss';
import Navbar from './../../Components/Navbar/Navbar.component';
import Sidebar from '../../Components/Sidebar/Sidebar.component';
import DashboardMain from '../DashboardMain/DashboardMain.component';


const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__nav">
                <Navbar />
            </div>
            <div className="dashboard__sidebar">
                <Sidebar />
            </div>
            <div className="dashboard__main">
                <DashboardMain />
            </div>
        </div>
    )
}

export default Dashboard
