import { dueTodayActionTypes } from './DueToday.types';

const INIT_STATE = {
    dueToday: null,
    isGettingDue: false,
    dueErrMsg: '',
    prevDoc: null,
    isGettingMoreDue: false,
    getMoreErrMsg: ''
}

const dueTodayReducer = (state=INIT_STATE, action) => {
    switch(action.type) {
        case dueTodayActionTypes.GET_DUE_TODAY_START:
            return {
                ...state,
                isGettingDue: true
            }
        case dueTodayActionTypes.GET_DUE_TODAY_SUCCESS:
            return {
                ...state,
                isGettingDue: false,
                dueToday: action.payload
            }
        case dueTodayActionTypes.GET_DUE_TODAY_FAILURE:
            return {
                ...state,
                isGettingDue: false,
                dueErrMsg: action.payload
            }
        case dueTodayActionTypes.SET_DUE_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case dueTodayActionTypes.GET_MORE_DUE_TODAY_START:
            return {
                ...state,
                isGettingMoreDue: true
            }
        case dueTodayActionTypes.GET_MORE_DUE_TODAY_SUCCESS:
            return {
                ...state,
                isGettingMoreDue: false,
                dueToday: [...state.dueToday, ...action.payload]
            }
        case dueTodayActionTypes.GET_MORE_DUE_TODAY_FAILURE:
            return {
                ...state,
                isGettingMoreDue: false,
                getMoreErrMsg: action.payload
            }
        default:
            return state;
    }
}

export default dueTodayReducer;