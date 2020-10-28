import { createSelector } from 'reselect';

const selectOverdue = state => state.overdue;

export const selectOverdueTasks = createSelector(
    [selectOverdue],
    overdue => overdue.overdueTasks
);

export const isGettingOverdueTasks = createSelector(
    [selectOverdue],
    overdue => overdue.isGettingOverdue
);

export const selectOverDuePrevDoc = createSelector(
    [selectOverdue],
    overdue => overdue.prevDoc
);