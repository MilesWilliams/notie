import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';
import * as fromWorkspace from '../reducers/workspace.reducer';

/**
 * Get Workspaces store state
 */
export const getWorkspaceState = createSelector(fromCore.getWorkspaceFeatureState, (state: fromCore.WorkSpacesState) => state.workspaces);

export const getAllWorkspaces = createSelector(getWorkspaceState, fromWorkspace.getWorkspaces);
export const workspacesLoad = createSelector(getWorkspaceState, fromWorkspace.getWorkspacesLoaded);

