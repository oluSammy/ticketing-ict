import { createSelector } from 'reselect';

const selectPending = state => state.pending;

export const selectIsGettingPending = createSelector(
    [selectPending],
    pending => pending.isGettingPending
);

export const selectPendingTasks = createSelector(
    [selectPending],
    pending => pending.pending
);

export const selectPendingPrevDoc = createSelector(
    [selectPending],
    pending => pending.prevDoc
);