import { createSelector } from 'reselect';

const selectCompleted = state => state.completed;

export const selectCompletedTasks = createSelector(
    [selectCompleted],
    completed => completed.completedTasks
);

export const selectIsGettingCompleted = createSelector(
    [selectCompleted],
    completed => completed.isGettingCompleted
);

export const selectCompletedPrevDoc = createSelector(
    [selectCompleted],
    completed => completed.prevDoc
);