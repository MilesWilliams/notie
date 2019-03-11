import { createSelector } from '@ngrx/store';
import * as fromCore from '../reducers';
import * as fromNotes from '../reducers/notes.reducer';

/**
 * Get Notes store state
 */
export const getNotesState = createSelector(fromCore.getWorkspaceFeatureState, (state: fromCore.WorkSpacesState) => state.notes);

export const getAllNotes = createSelector(getNotesState, fromNotes.getWorkspacesNotes);
export const selectedNote = createSelector(
    getNotesState,
    fromNotes.getSelectedNote,
    (state, id) => state.notes[id]
);
export const notesLoad = createSelector(getNotesState, fromNotes.getNotesLoaded);

