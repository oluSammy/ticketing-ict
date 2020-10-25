import { registerActionTypes } from './register.types';
import { firestore } from '../../firebase/firebase.utils';
import { auth } from './../../firebase/firebase.utils';
import Swal from 'sweetalert2';


const registerStart = () => ({
    type: registerActionTypes.REGISTER_START
});

const registerSuccess = () => ({
    type: registerActionTypes.REGISTER_SUCCESS
});

const registerFailure = errMsg => ({
    type: registerActionTypes.REGISTER_FAILURE,
    payload: errMsg
});

export const asyncRegisterStaff = staff => {
    return async dispatch => {
        try {
            dispatch(registerStart());
            const { firstName, lastName, email, password, designation } = staff;
            const userRef = firestore.collection('users');
            auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                userRef.doc(`${userCredential.user.uid}`)
                .set({
                    firstName,
                    surname: lastName,
                    userRight: 'staff',
                    designation
                });
            });
            dispatch(registerSuccess());
            Swal.fire(
                'Done',
                'New ICT Staff created',
                'success'
            );
        } catch (errMsg) {
            dispatch(registerFailure(errMsg));
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
}