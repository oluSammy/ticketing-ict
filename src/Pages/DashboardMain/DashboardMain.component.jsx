import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';


const DashboardMain = () => {
    return (
        <div>
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
            </Switch>
        </div>
    )
}

export default DashboardMain
