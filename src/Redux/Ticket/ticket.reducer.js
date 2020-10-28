import { ticketActionTypes } from './ticket.types';

const INIT_STATE = {
    ticket: null,
    isGettingTicket: false,
    ticketErrMsg: '',
    isCompleting: false,
    completeErrMsg: ''
}

const ticketReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case ticketActionTypes.GET_TICKET_START:
            return {
                ...state,
                isGettingTicket: true
            }
        case ticketActionTypes.GET_TICKET_SUCCESS:
            return {
                ...state,
                isGettingTicket: false,
                ticket: action.payload
            }
        case ticketActionTypes.GET_TICKET_FAILURE:
            return {
                ...state,
                isGettingTicket: false,
                ticketErrMsg: action.payload
            }
        case ticketActionTypes.COMPLETE_TASK_START:
            return {
                ...state,
                isCompleting: true
            }
        case ticketActionTypes.COMPLETE_TASK_SUCCESS:
            return {
                ...state,
                isCompleting: false
            }
        case ticketActionTypes.COMPLETE_TASK_FAILURE:
            return {
                ...state,
                isCompleting: false,
                completeErrMsg: action.payload
            }
        default: return state;
    }
}

export default ticketReducer;
