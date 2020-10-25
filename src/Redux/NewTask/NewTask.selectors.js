import { createSelector } from 'reselect';

export const selectAddTickets = state => state.newTask;

export const selectIsAddingTicket = createSelector(
    [selectAddTickets],
    newTask => newTask.isAddingTicket
);