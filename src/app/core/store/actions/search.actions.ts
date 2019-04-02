import { Action } from '@ngrx/store';

import { Utils } from '../../../utils';
import { Workspace } from '../../interfaces/workspace/workspace.interface';

export const SEARCH_WORKSPACES = Utils.Type('[Core: Search] Search workspaces');
export const SEARCH_WORKSPACES_SUCCESS = Utils.Type('[Core: Search] Search workspaces success');
export const SEARCH_WORKSPACES_FAIL = Utils.Type('[Core: Search] Search workspaces fail');

export class SearchWorkspaces implements Action {
    readonly type = SEARCH_WORKSPACES;
    constructor(public payload: string) { }
}

export class SearchWorkspacesSuccess implements Action {
    public readonly type = SEARCH_WORKSPACES_SUCCESS;
    constructor(public payload: Workspace[]) { }
}

export class SearchWorkspacesFail implements Action {
    readonly type = SEARCH_WORKSPACES_FAIL;
    constructor(public payload: string) { }
}

export const HAS_QUERY = Utils.Type('[Core: Search] Toggle is searching');
export class HasQuery implements Action {
    readonly type = HAS_QUERY;
    constructor(public payload?: boolean) { }
}

export type SearchActions =
	| SearchWorkspaces
	| SearchWorkspacesSuccess
    | SearchWorkspacesFail
    | HasQuery;