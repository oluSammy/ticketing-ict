import { registerActionTypes } from './register.types';

const INIT_STATE = {
    isRegistering: false,
    registerErrMsg: ''
}

const registerReducer = (state=INIT_STATE, action) => {
    switch (action.type) {
        case registerActionTypes.REGISTER_START:
            return {
                ...state,
                isRegistering: true
            }
        case registerActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false
            }
        case registerActionTypes.REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                registerErrMsg: action.payload
            }
    }
}

export default registerReducer;