import { newTaskActionTypes } from './NewTask.types';
import { firestore, FieldValue } from './../../firebase/firebase.utils';
import Swal from 'sweetalert2';

const addTicketStart = () => ({
    type: newTaskActionTypes.ADD_TICKET_START
});

const addTicketSuccess = () => ({
    type: newTaskActionTypes.ADD_TICKET_SUCCESS
});

const addTicketFailure = errMsg => ({
    type: newTaskActionTypes.ADD_TICKET_FAILURE,
    payload: errMsg
});

export const asyncAddTicket = ticket => {
    return async dispatch => {
        try {
            const { name, email, designation, title, task, uid } = ticket;
            dispatch(addTicketStart());
            const ticketRef = firestore.collection("tickets");
            await ticketRef.add({
                senderName: name,
                senderEmail: email,
                senderDesignation: designation,
                completed: false,
                title,
                task,
                resolved: false,
                assigned: false,
                createdAt: FieldValue,
                senderUid: uid
            });
            dispatch(addTicketSuccess());
            Swal.fire(
                'Done!',
                `New Task Created`,
                'success'
            );
        } catch (errMsg) {
            dispatch(addTicketFailure(errMsg));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
}