import { overdueActionTypes } from './overdue.types';
import { firestore } from '../../firebase/firebase.utils';

const getOverdueStart = () => ({
    type: overdueActionTypes.GET_OVERDUE_START
});

const getOverdueSuccess = tasks => ({
    type: overdueActionTypes.GET_OVERDUE_SUCCESS,
    payload: tasks
});

const getOverdueFailure = errMsg => ({
    type: overdueActionTypes.GET_OVERDUE_FAILURE,
    payload: errMsg
});

const setDuePrevDoc = prevDoc => ({
    type: overdueActionTypes.SET_OVERDUE_PREV_DOC,
    payload: prevDoc
});

const getMoreOverdueStart = () => ({
    type: overdueActionTypes.GET_MORE_OVERDUE_START
});

const getMoreOverdueSuccess = tasks => ({
    type: overdueActionTypes.GET_MORE_OVERDUE_SUCCESS,
    payload: tasks
});

const getMoreOverdueFailure = errMsg => ({
    type: overdueActionTypes.GET_MORE_OVERDUE_FAILURE,
    payload: errMsg
});

export const asyncGetOverdue = staffName => {
    return dispatch => {
        try {
            dispatch(getOverdueStart());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueRef = firestore.collection('tickets').where('completed', '==', false)
            .where('assignedTo', '==', `${staffName}`).where('deadline', '<', today).orderBy('deadline', 'desc').limit(20);
            dueRef.onSnapshot(docSnapshot => {
                const dueTasks = [];
                docSnapshot.docs.forEach(doc => dueTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getOverdueSuccess(dueTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setDuePrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getOverdueFailure(errMsg));
        }
    }
}

export const asyncGetMoreOverdue = (staffName, prevDoc) => {
    return dispatch => {
        try {
            dispatch(getMoreOverdueStart());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueRef = firestore.collection('tickets').where('completed', '==', false)
            .where('assignedTo', '==', `${staffName}`).where('deadline', '<', today)
            .orderBy('deadline', 'desc').startAfter(prevDoc).limit(20);
            dueRef.onSnapshot(docSnapshot => {
                const dueTasks = [];
                docSnapshot.docs.forEach(doc => dueTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getMoreOverdueSuccess(dueTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setDuePrevDoc(lastDoc));
            })

        } catch (errMsg) {
            dispatch(getMoreOverdueFailure(errMsg))
        }
    }
}