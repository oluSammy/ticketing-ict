import { newTaskActionTypes } from './NewTask.types';

const INIT_STATE = {
    isAddingTicket: false,
    addTicketErrMsg: ''
}

const newTicketReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case newTaskActionTypes.ADD_TICKET_START:
            return {
                ...state,
                isAddingTicket: true
            }
        case newTaskActionTypes.ADD_TICKET_SUCCESS:
            return {
                ...state,
                isAddingTicket: false
            }
        case newTaskActionTypes.ADD_TICKET_FAILURE:
            return {
                ...state,
                isAddingTicket: false,
                addTicketErrMsg: action.payload
            }
        default: return state
    }
}

export default newTicketReducer;