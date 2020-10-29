import { overdueActionTypes } from './overdue.types';

const INIT_STATE = {
    overdueTasks: null,
    isGettingOverdue: false,
    overdueErrMsg: '',
    prevDoc: null,
    isGettingMoreOverDue: false,
    getMoreErrMsg: ''
}

const overdueReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case overdueActionTypes.GET_OVERDUE_START:
            return {
                ...state,
                isGettingOverdue: true
            }
        case overdueActionTypes.GET_OVERDUE_SUCCESS:
            return {
                ...state,
                isGettingOverdue: false,
                overdueTasks: action.payload
            }
        case overdueActionTypes.GET_OVERDUE_FAILURE:
            return {
                ...state,
                isGettingOverdue: false,
                overdueErrMsg: action.payload
            }
        case overdueActionTypes.GET_MORE_OVERDUE_START:
            return {
                ...state,
                isGettingMoreOverDue: true
            }
        case overdueActionTypes.GET_MORE_OVERDUE_SUCCESS:
            return {
                ...state,
                isGettingMoreOverDue: false,
                overdueTasks: [...state.overdueTasks, ...action.payload]
            }
        case overdueActionTypes.GET_MORE_OVERDUE_FAILURE:
            return {
                ...state,
                isGettingMoreOverDue: false,
                getMoreErrMsg: action.payload
            }
        case overdueActionTypes.SET_OVERDUE_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        default: return state
    }
}

export default overdueReducer;
