import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';

export const getRouterState = createSelector(
	fromCore.getCoreState,
	(state: fromCore.CoreState) => state.routerReducer
);

export const getRouter = createSelector(getRouterState, state => {
	return state.state;
});
