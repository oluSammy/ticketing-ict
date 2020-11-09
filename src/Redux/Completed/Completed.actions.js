import { completedActionTypes } from './completed.types';
import { firestore } from '../../firebase/firebase.utils';


const getCompletedStart = () => ({
    type: completedActionTypes.GET_COMPLETED_START
});

const getCompletedSuccess = tasks => ({
    type: completedActionTypes.GET_COMPLETED_SUCCESS,
    payload: tasks
});

const getCompletedFailure = errMsg => ({
    type: completedActionTypes.GET_COMPLETED_FAILURE,
    payload: errMsg
});

const setCompletedPrevDoc = prevDoc => ({
    type: completedActionTypes.SET_COMPLETED_PREV_DOC,
    payload: prevDoc
});

const getMoreCompletedStart = () => ({
    type: completedActionTypes.GET_MORE_COMPLETED_START
});

const getMoreCompletedSuccess = task => ({
    type: completedActionTypes.GET_MORE_COMPLETED_SUCCESS,
    payload: task
});

const getMoreCompletedFailure = errMsg => ({
    type: completedActionTypes.GET_MORE_COMPLETED_FAILURE,
    payload: errMsg
});

export const asyncGetCompleted = (staffName) => {
    return dispatch => {
        try {
            dispatch(getCompletedStart());
            const taskRef = firestore.collection('tickets').where('assignedTo', '==', `${staffName}`)
            .where('completed', '==', true).orderBy('completedOn', 'desc').limit(20);
            taskRef.onSnapshot(docSnapshot => {
                const completedTask = [];
                docSnapshot.docs.forEach(task => completedTask.push({ id: task.id, data: task.data() }));
                dispatch(getCompletedSuccess(completedTask));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setCompletedPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getCompletedFailure(errMsg));
        }
    }
}

export const asyncGetMoreCompleted = (staffName, prevDoc) => {
    return dispatch => {
        try {
            dispatch(getMoreCompletedStart());
            const taskRef = firestore.collection('tickets').where('assignedTo', '==', `${staffName}`)
            .where('completed', '==', true).orderBy('completedOn', 'desc').startAfter(prevDoc).limit(20);
            taskRef.onSnapshot(docSnapshot => {
                const completedTask = [];
                docSnapshot.docs.forEach(task => completedTask.push({ id: task.id, data: task.data() }));
                dispatch(getMoreCompletedSuccess(completedTask));
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(setCompletedPrevDoc(lastDoc));
            });
        } catch (errMsg) {
            dispatch(getMoreCompletedFailure(errMsg));
        }
    }
}