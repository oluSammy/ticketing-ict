import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectUserDetail = createSelector(
    [selectUser],
    user => user.userDetail
);

export const selectIsGettingUserDetail = createSelector(
    [selectUser],
    user => user.isGettingUserDetail
);