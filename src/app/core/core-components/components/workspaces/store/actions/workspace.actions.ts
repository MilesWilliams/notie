import { Action } from '@ngrx/store';
import { Utils } from '../../../../../../utils';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

export const LOAD_WORKSPACES = Utils.Type('[Workspace: Load] Load all workspace');
export const LOAD_WORKSPACES_SUCCESS = Utils.Type('[Workspace: Load] Load all workspace success');
export const LOAD_WORKSPACES_FAIL = Utils.Type('[Workspace: Load] Load all workspace fail');

export class LoadWorkspaces implements Action {
	readonly type = LOAD_WORKSPACES;
};

export class LoadWorkspacesSuccess implements Action {
	public readonly type = LOAD_WORKSPACES_SUCCESS;
	constructor(public payload: Workspace[]) {}
};

export class LoadWorkspacesFail implements Action {
	public readonly type = LOAD_WORKSPACES_FAIL;
	constructor(public payload: any) {}
};

export const CREATE_NEW_WORKSPACE = Utils.Type('[Workspace: Create] Create new workspace');
export const CREATE_NEW_WORKSPACE_SUCCESS = Utils.Type('[Workspace: Create] Create new workspace success');
export const CREATE_NEW_WORKSPACE_FAIL = Utils.Type('[Workspace: Create] Create new workspace fail');

export class CreateNewWorkspace implements Action {
	readonly type = CREATE_NEW_WORKSPACE;
	constructor(public payload: Workspace) {}
};

export class CreateNewWorkspaceSuccess implements Action {
	public readonly type = CREATE_NEW_WORKSPACE_SUCCESS;
	constructor(public payload: Workspace) {}
};

export class CreateNewWorkspaceFail implements Action {
	public readonly type = CREATE_NEW_WORKSPACE_FAIL;
	constructor(public payload: any) {}
};

export const DELETE_WORKSPACE = Utils.Type('[Workspace: Delete] Delete workspace');
export const DELETE_WORKSPACE_SUCCESS = Utils.Type('[Workspace: Delete] Delete workspace success');
export const DELETE_WORKSPACE_FAIL = Utils.Type('[Workspace: Delete] Delete workspace fail');

export class DeleteWorkspace implements Action {
	readonly type = DELETE_WORKSPACE;
	constructor(public payload: string) {}
};

export class DeleteWorkspaceSuccess implements Action {
	public readonly type = DELETE_WORKSPACE_SUCCESS;
	constructor(public payload: string) {}
};

export class DeleteWorkspaceFail implements Action {
	public readonly type = DELETE_WORKSPACE_FAIL;
	constructor(public payload: any) {}
};

export const INSERT_NOTE = Utils.Type('[Workspace: Note insert] Insert new note');
export class InsertNewNote implements Action {
	public readonly type = INSERT_NOTE;
	constructor(public payload: {note: Note, workspace_id: string}) {}
};
/**
* WorkspaceActions type.
* @type {Actions}
*/
export type WorkspaceActions =
| CreateNewWorkspace
| CreateNewWorkspaceSuccess
| CreateNewWorkspaceFail
| DeleteWorkspace
| DeleteWorkspaceSuccess
| DeleteWorkspaceFail
| LoadWorkspaces
| LoadWorkspacesSuccess
| LoadWorkspacesFail
| InsertNewNote;
