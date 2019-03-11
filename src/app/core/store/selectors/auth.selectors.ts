import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';
import { isAuthenticated } from '../reducers/auth.reducer';

/**
 * Get Auth store state
 */
export const getAuthState = createSelector(
	fromCore.getCoreState,
	(state: fromCore.CoreState) => state.auth
);

/**
 * Get authenticated boolean.
 */
export const getIsAuthenticated = createSelector(getAuthState, isAuthenticated);

/**
 * Get authenticated user
 */
export const getAuthenticatedUser = createSelector(getAuthState, state => {
	return state.user;
});
