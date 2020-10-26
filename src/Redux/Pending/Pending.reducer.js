import { pendingActionTypes } from './Pending.types';

const INIT_STATE = {
    pending: null,
    isGettingPending: false,
    pendingErrMsg: '',
    prevDoc: null,
    isGettingMoreTasks: false,
    getMoreTaskErrMsg: ''
}

const pendingReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case pendingActionTypes.GET_PENDING_START:
            return {
                ...state,
                isGettingPending: true,
            }
        case pendingActionTypes.GET_PENDING_SUCCESS:
            return {
                ...state,
                isGettingPending: false,
                pending: action.payload
            }
        case pendingActionTypes.GET_PENDING_FAILURE:
            return {
                ...state,
                isGettingPending: false,
                pendingErrMsg: action.payload
            }
        case pendingActionTypes.SET_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case pendingActionTypes.GET_MORE_PENDING_START:
            return {
                ...state,
                isGettingMoreTasks: true
            }
        case pendingActionTypes.GET_MORE_PENDING_SUCCESS:
            return {
                ...state,
                isGettingMoreTasks: false,
                pending: [...state.pending, ...action.payload]
            }
        case pendingActionTypes.GET_MORE_PENDING_FAILURE:
            return {
                ...state,
                isGettingMoreTasks: false,
                getMoreTaskErrMsg: action.payload
            }
        default:
            return state
    }
}

export default pendingReducer;
