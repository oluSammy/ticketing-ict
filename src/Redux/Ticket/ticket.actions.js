import { ticketActionTypes } from './ticket.types';
import { firestore, FieldValue } from '../../firebase/firebase.utils';

const getTicketStart = () => ({
    type: ticketActionTypes.GET_TICKET_START
});

const getTicketSuccess = ticket => ({
    type: ticketActionTypes.GET_TICKET_SUCCESS,
    payload: ticket
});

const getTicketFailure = errMsg => ({
    type: ticketActionTypes.GET_TICKET_FAILURE,
    payload: errMsg
});

const completeTaskStart = () => ({
    type: ticketActionTypes.COMPLETE_TASK_START
});

const completeTaskSuccess = () => ({
    type: ticketActionTypes.COMPLETE_TASK_SUCCESS
})

const completeTaskFailure = () => ({
    type: ticketActionTypes.COMPLETE_TASK_FAILURE
});

export const asyncGetTicket = id => {
    return async dispatch => {
        try {
            dispatch(getTicketStart());
            const ticketRef = firestore.collection('tickets').doc(`${id}`);
            ticketRef.onSnapshot(docSnapshot => {
                dispatch(getTicketSuccess(docSnapshot.data()));
            });
        } catch (errMsg) {
            dispatch(getTicketFailure(errMsg));
        }
    }
}

export const asyncCompleteTask = id => {
    return async dispatch => {
        try {
            dispatch(completeTaskStart());
            const ticketRef = firestore.collection('tickets').doc(`${id}`);
            await ticketRef.update({ completed: true, completedOn: FieldValue });
            dispatch(completeTaskSuccess());
        } catch (errMsg) {
            dispatch(completeTaskFailure(errMsg));
        }
    }
}