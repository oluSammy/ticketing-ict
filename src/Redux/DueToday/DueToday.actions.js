import { dueTodayActionTypes } from './DueToday.types';
import { firestore } from '../../firebase/firebase.utils';

const getDueTodayStart = () => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_START
});

const getDueTodaySuccess = task => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_SUCCESS,
    payload: task
});

const getDueTodayFailure = errMsg => ({
    type: dueTodayActionTypes.GET_DUE_TODAY_FAILURE,
    payload: errMsg
});

const setDuePrevDocs = prevDoc => ({
    type: dueTodayActionTypes.SET_DUE_PREV_DOC,
    payload: prevDoc
});

const getMoreDueTodayStart = () => ({
    type: dueTodayActionTypes.GET_MORE_DUE_TODAY_START
});

const getMoreDueTodaySuccess = tasks => ({
    type: dueTodayActionTypes.GET_MORE_DUE_TODAY_SUCCESS,
    payload: tasks
});

const getMoreDueTodayFailure = errMsg => ({
    type: dueTodayActionTypes.GET_MORE_DUE_TODAY_FAILURE,
    payload: errMsg
});

export const asyncGetDueToday = (uid) => {
    return dispatch => {
        try {
            dispatch(getDueTodayStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const ticketRef = firestore.collection('tickets').where('deadline', '==', startOfDay)
            .where('assignedTo', '==', `${uid}`).where('completed', '==', false)
            .orderBy('createdAt', 'desc').limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                let tasks = [];
                docSnapshot.forEach(doc => {
                    tasks.push({ id: doc.id, data: doc.data() })
                });
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(getDueTodaySuccess(tasks));
                dispatch(setDuePrevDocs(lastDoc));
            })
        } catch (errMsg) {
            dispatch(getDueTodayFailure(errMsg));
        }
    }
}

export const asyncGetMoreDueToday = (uid, prevDoc) => {
    return dispatch => {
        try {
            dispatch(getMoreDueTodayStart());
            const startOfDay = new Date();
            startOfDay.setHours(0, 0, 0, 0);
            const ticketRef = firestore.collection('tickets').where('deadline', '==', startOfDay)
            .where('assignedTo', '==', `${uid}`).where('completed', '==', false).orderBy('createdAt', 'desc')
            .startAfter(prevDoc).limit(20);
            ticketRef.onSnapshot(docSnapshot => {
                let tasks = [];
                docSnapshot.forEach(doc => {
                    tasks.push({ id: doc.id, data: doc.data() })
                });
                const lastDoc = docSnapshot.docs[docSnapshot.docs.length - 1];
                dispatch(getMoreDueTodaySuccess(tasks));
                dispatch(setDuePrevDocs(lastDoc));
            })

        } catch (errMsg) {
            dispatch(getMoreDueTodayFailure(errMsg))
        }
    }
}

