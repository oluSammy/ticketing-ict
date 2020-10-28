import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import newTicketReducer from './NewTask/NewTask.reducer';
import pendingReducer from './Pending/Pending.reducer';
import dueTodayReducer from './DueToday/DueToday.reducer';
import overdueReducer from './Overdue/overdue.reducer';
import ticketReducer from './Ticket/ticket.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    user: userReducer,
    newTask: newTicketReducer,
    pending: pendingReducer,
    dueToday: dueTodayReducer,
    overdue: overdueReducer,
    ticket: ticketReducer
});

export default persistReducer(persistConfig, rootReducer);