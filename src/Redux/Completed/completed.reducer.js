import { completedActionTypes } from './completed.types';

const INIT_STATE = {
    completedTasks: null,
    isGettingCompleted: false,
    completedErrMsg: '',
    prevDoc: null,
    isGettingMoreCompleted: false,
    getMoreErrMsg: ''
}

const completedReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case completedActionTypes.GET_COMPLETED_START:
            return {
                ...state,
                isGettingCompleted: true
            }
        case completedActionTypes.GET_COMPLETED_SUCCESS:
            return {
                ...state,
                isGettingCompleted: false,
                completedTasks: action.payload
            }
        case completedActionTypes.GET_COMPLETED_FAILURE:
            return {
                ...state,
                isGettingCompleted: false,
                completedErrMsg: action.payload
            }
        case completedActionTypes.SET_COMPLETED_PREV_DOC:
            return {
                ...state,
                prevDoc: action.payload
            }
        case completedActionTypes.GET_MORE_COMPLETED_START:
            return {
                ...state,
                isGettingMoreCompleted: true
            }
        case completedActionTypes.GET_MORE_COMPLETED_SUCCESS:
            return {
                ...state,
                isGettingMoreCompleted: false,
                completedTasks: [...state.completedTasks, ...action.payload]
            }
        case completedActionTypes.GET_MORE_COMPLETED_FAILURE:
            return {
                ...state,
                isGettingCompleted: false,
                getMoreErrMsg: action.payload
            }
        default: return state;
    }
}

export default completedReducer;
