import { Action } from '@ngrx/store';
import { Utils } from '../../../../../../utils';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

export const LOAD_ALL_NOTES = Utils.Type('[Workspace: Load-Notes] Load all notes');
export const LOAD_ALL_NOTES_SUCCESS = Utils.Type('[Workspace: Load-Notes] Load all notes success');
export const LOAD_ALL_NOTES_FAIL = Utils.Type('[Workspace: Load-Notes] Create all notes fail');

export class LoadNotes implements Action {
	readonly type = LOAD_ALL_NOTES;
};

export class LoadNotesSuccess implements Action {
	public readonly type = LOAD_ALL_NOTES_SUCCESS;
	constructor(public payload: Note[]) {}
};

export class LoadNotesFail implements Action {
	public readonly type = LOAD_ALL_NOTES_FAIL;
	constructor(public payload: any) {}
};

export const CREATE_NEW_NOTE = Utils.Type('[Workspace: Create-Note] Create new note');
export const CREATE_NEW_NOTE_SUCCESS = Utils.Type('[Workspace: Create-Note] Create new note success');
export const CREATE_NEW_NOTE_FAIL = Utils.Type('[Workspace: Create-Note] Create new note fail');

export class CreateNewNote implements Action {
	readonly type = CREATE_NEW_NOTE;
	constructor(public payload: Note) {}
};

export class CreateNewNoteSuccess implements Action {
	public readonly type = CREATE_NEW_NOTE_SUCCESS;
	constructor(public payload: Note) {}
};

export class CreateNewNoteFail implements Action {
	public readonly type = CREATE_NEW_NOTE_FAIL;
	constructor(public payload: any) {}
};

export const UPDATE_NOTE = Utils.Type('[Workspace: Update] Update note');
export const UPDATE_NOTE_SUCCESS = Utils.Type('[Workspace: Update] Update note success');
export const UPDATE_NOTE_FAIL = Utils.Type('[Workspace: Update] Update note fail');

export class UpdateNewNote implements Action {
	readonly type = UPDATE_NOTE;
	constructor(public payload: Note) {}
};

export class UpdateNewNoteSuccess implements Action {
	public readonly type = UPDATE_NOTE_SUCCESS;
	constructor(public payload: Note) {}
};

export class UpdateNewNoteFail implements Action {
	public readonly type = UPDATE_NOTE_FAIL;
	constructor(public payload: any) {}
};

export const DELETE_NOTE = Utils.Type('[Workspace: Delete-Note] Delete note');
export const DELETE_NOTE_SUCCESS = Utils.Type('[Workspace: Delete-Note] Delete note success');
export const DELETE_NOTE_FAIL = Utils.Type('[Workspace: Delete-Note] Delete note fail');

export class DeleteNote implements Action {
	readonly type = DELETE_NOTE;
	constructor(public payload: number) {}
};

export class DeleteNoteSuccess implements Action {
	public readonly type = DELETE_NOTE_SUCCESS;
	constructor(public payload: number) {}
};

export class DeleteNoteFail implements Action {
	public readonly type = DELETE_NOTE_FAIL;
	constructor(public payload: any) {}
};

export const SET_SELECTED_NOTE = Utils.Type('[Workspace: Select-Note] Select note');

export class SetSelectedNote implements Action {
	readonly type = SET_SELECTED_NOTE;
	constructor(public payload: number) {}
};


/**
* NoteActions type.
* @type {Actions}
*/
export type NoteActions =
| CreateNewNote
| CreateNewNoteSuccess
| CreateNewNoteFail
| DeleteNote
| DeleteNoteSuccess
| DeleteNoteFail
| LoadNotes
| LoadNotesSuccess
| LoadNotesFail
| UpdateNewNote
| UpdateNewNoteSuccess
| UpdateNewNoteFail
| SetSelectedNote;
