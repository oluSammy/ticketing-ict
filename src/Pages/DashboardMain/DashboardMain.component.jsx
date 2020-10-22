import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import NewTask from './../NewTask/NewTask.component';


const DashboardMain = () => {
    return (
        <div>
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
                <Route exact path="/new-task" component={NewTask} />
            </Switch>
        </div>
    )
}

export default DashboardMain
