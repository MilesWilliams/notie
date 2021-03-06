export * from '../router';

import {
	ActionReducer,
	combineReducers,
	createSelector,
	ActionReducerMap,
	createFeatureSelector,
	compose,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './auth.reducer';
import * as fromSearch from './search.reducer';

import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

import { RouterStateUrl } from '../router';

export interface CoreState {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
	auth: fromAuth.IAuthState;
	search: fromSearch.ISearchState;
}

export const reducers: ActionReducerMap<CoreState> = {
	routerReducer: fromRouter.routerReducer,
	auth: fromAuth.reducer,
	search: fromSearch.reducer
};

export const storeConfig: LocalStorageConfig = {
	keys: ['routerReducer', 'auth', 'search'],
	rehydrate: true,
};

const developmentReducer: ActionReducer<CoreState> = compose(
	localStorageSync(storeConfig),
	combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<CoreState> = combineReducers(reducers);

export function CoreStateReducer(state: CoreState, action: any) {
	return developmentReducer(state, action);
}

export const getCoreState = createFeatureSelector<CoreState>('CoreState');
