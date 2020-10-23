import { userActionTypes } from './user.types';
import { firestore } from '../../firebase/firebase.utils';


export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});

const getUserDetailStart = () => ({
    type: userActionTypes.GET_USER_DETAIL_START
});

const getUserDetailSuccess = userDetail => ({
    type: userActionTypes.GET_USER_DETAIL_SUCCESS,
    payload: userDetail
});

const getUserDetailFailure = errMsg => ({
    type: userActionTypes.GET_USER_DETAIL_FAILURE,
    payload: errMsg
});


export const asyncGetUserDetail = id => {
    return async dispatch => {
        try {
            dispatch(getUserDetailStart());
            const userRef = firestore.collection('users').doc(`${id}`);
            const userDetail = await userRef.get();
            dispatch(getUserDetailSuccess(userDetail.data()));
        } catch (errMsg) {
            dispatch(getUserDetailFailure(errMsg));
        }
    }
}
