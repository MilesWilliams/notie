import * as fromActions from '../actions/search.actions';
import { User } from '../../interfaces/authentication/user.interface';
import { Workspace } from '../../interfaces/workspace/workspace.interface';
import { Utils } from 'src/app/utils';

export interface ISearchState {
    has_query: boolean;
    is_searching: boolean;
    search_results: {[id: string]: Workspace};
}
export const initialState: ISearchState = {
    has_query: false,
    is_searching: false,
    search_results: {}
};

export function reducer(
	state: ISearchState = initialState,
	action: fromActions.SearchActions
): ISearchState {
	switch (action.type) {
		case fromActions.HAS_QUERY: {
            const has_query = !state.has_query;
			return { ...state, has_query };
        }

        case fromActions.SEARCH_WORKSPACES: {
            return {...state, is_searching: true}
        }

        case fromActions.SEARCH_WORKSPACES_SUCCESS: {
            const search_results =  Utils.Format.MapToEntities(action.payload, state);
            return {...state, is_searching: false, search_results}
        }

        case fromActions.SEARCH_WORKSPACES_FAIL: {
            return {...state, is_searching: false}
        }

		default:
			return state;
	}
}

export const hasQuery = (state: ISearchState) => state.has_query;
export const isSearching = (state: ISearchState) => state.is_searching;
export const searchResults = (state: ISearchState) => state.search_results;
