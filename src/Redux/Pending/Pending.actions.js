import { pendingActionTypes } from './Pending.types';
import { firestore } from '../../firebase/firebase.utils';

const getPendingStart = () => ({
    type: pendingActionTypes.GET_PENDING_START
});

const getPendingSuccess = tasks => ({
    type: pendingActionTypes.GET_PENDING_SUCCESS,
    payload: tasks
});

const getPendingFailure = errMsg => ({
    type: pendingActionTypes.GET_PENDING_FAILURE,
    payload: errMsg
});

const setPrevDoc = prevDoc => ({
    type: pendingActionTypes.SET_PREV_DOC,
    payload: prevDoc
});

const getMorePendingStart = () => ({
    type: pendingActionTypes.GET_MORE_PENDING_START
});

const getMorePendingSuccess = tasks => ({
    type: pendingActionTypes.GET_MORE_PENDING_SUCCESS,
    payload: tasks
});

const getMorePendingFailure = errMsg => ({
    type: pendingActionTypes.GET_MORE_PENDING_FAILURE,
    payload: errMsg
});

export const asyncGetPending = staffName => {
    return async dispatch => {
        try {
            dispatch(getPendingStart());
            const pendingRef = firestore.collection('tickets').where('assignedTo', '==', `${staffName}`)
            .where('completed', '==', false).limit(1);
            pendingRef.onSnapshot(docSnapshot => {
                const pendingTasks = [];
                docSnapshot.docs.forEach(doc => pendingTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getPendingSuccess(pendingTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getPendingFailure(errMsg));
        }
    }
}

export const asyncGetMorePending = (staffName, prevDoc) => {
    return async dispatch => {
        try {
            dispatch(getMorePendingStart());
            const pendingRef = firestore.collection('tickets').where('assignedTo', '==', `${staffName}`)
            .where('completed', '==', false).startAfter(prevDoc).limit(1);
            pendingRef.onSnapshot(docSnapshot => {
                const pendingTasks = [];
                docSnapshot.docs.forEach(doc => pendingTasks.push({ id: doc.id, data: doc.data() }));
                dispatch(getMorePendingSuccess(pendingTasks));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getMorePendingFailure())
        }
    }
}