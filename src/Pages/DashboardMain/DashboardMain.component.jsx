import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardHome from './../DashboardHome/DashboardHome.component';
import NewTask from './../NewTask/NewTask.component';
import Pending from './../Pending/Pending.component';
import DueToday from './../DueToday/DueToday.component';
import Overdue from './../Overdue/Overdue.component';
import Completed from './../Completed/Completed.component';
import Register from './../Register/Register.component';


const DashboardMain = () => {
    return (
        <div>
            <Switch>
                <Route exact path={["/", "/dashboard"]} component={DashboardHome} />
                <Route exact path="/new-task" component={NewTask} />
                <Route exact path="/pending" component={Pending} />
                <Route exact path="/due-today" component={DueToday} />
                <Route exact path="/overdue" component={Overdue} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/register-staff" component={Register} />
            </Switch>
        </div>
    )
}

export default DashboardMain
