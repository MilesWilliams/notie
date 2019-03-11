import {
    ActionReducer,
    combineReducers,
    createFeatureSelector,
    ActionReducerMap,
    compose,
} from '@ngrx/store';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

import * as fromWorkSpace from './workspace.reducer';
import * as fromNotes from './notes.reducer';

export interface WorkSpacesState {
    workspaces: fromWorkSpace.IWorkSpaces;
    notes: fromNotes.INotes;
}

export const reducers: ActionReducerMap<WorkSpacesState> = {
    workspaces: fromWorkSpace.reducer,
    notes: fromNotes.reducer
};

export const storeConfig: LocalStorageConfig = {
    keys: ['workspaces', 'notes'],
    rehydrate: true,
};

const developmentReducer: ActionReducer<WorkSpacesState> = compose(
    // storeLogger(),
    localStorageSync(storeConfig),
    combineReducers
)(reducers);

// production reducer
const productionReducer: ActionReducer<WorkSpacesState> = combineReducers(reducers);

export function WorkSpacesStateReducer(state: WorkSpacesState, action: any) {
    return developmentReducer(state, action);
}

//  State selectors
export const getWorkspaceFeatureState = createFeatureSelector<WorkSpacesState>('workspaces');
