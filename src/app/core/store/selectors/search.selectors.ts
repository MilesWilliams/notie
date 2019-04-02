import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';
import * as fromSearch from '../reducers/search.reducer';

/**
 * Get Auth store state
 */
export const getSearchState = createSelector(
	fromCore.getCoreState,
	(state: fromCore.CoreState) => state.search
);

/**
 * Get has query boolean.
 */
export const hasQuery = createSelector(getSearchState, fromSearch.hasQuery);

/**
 * Get search results
 */
export const searchResults = createSelector(getSearchState, fromSearch.searchResults);


/**
 * Get is searching boolean
 */
export const isSearching = createSelector(getSearchState, fromSearch.isSearching);
