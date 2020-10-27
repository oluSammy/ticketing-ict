import { createSelector } from 'reselect';

const selectDueToday = state => state.dueToday;

export const selectDueTodayTasks = createSelector(
    [selectDueToday],
    dueToday => dueToday.dueToday
);

export const selectIsGettingDueToday = createSelector(
    [selectDueToday],
    dueToday => dueToday.isGettingDue
);

export const selectDueTodayPrevDoc = createSelector(
    [selectDueToday],
    dueToday => dueToday.prevDoc
);