import { userActionTypes } from './user.types';

const INIT_STATE = {
    currentUser: null,
    userDetail: null,
    isGettingUserDetail: false,
    getUserDetailErrMsg: '',
    sideBarOpen: false
}

const userReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.GET_USER_DETAIL_START:
            return {
                ...state,
                isGettingUserDetail: true
            }
        case userActionTypes.GET_USER_DETAIL_SUCCESS:
            return {
                ...state,
                isGettingUserDetail: false,
                userDetail: action.payload
            }
        case userActionTypes.GET_USER_DETAIL_FAILURE:
            return {
                ...state,
                isGettingUserDetail: false
            }
        case userActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sideBarOpen: !state.sideBarOpen
            }
        default:
            return state;
    }
}

export default userReducer