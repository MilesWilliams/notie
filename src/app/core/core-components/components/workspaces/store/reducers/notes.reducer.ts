import * as fromActions from '../actions/notes.actions';

import { Utils } from 'src/app/utils';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

export interface INotes {
    notes: { [id: number]: Note };
    loading: boolean;
    loaded: boolean;
    selected_note: number;
}
export const initialState: INotes = {
    notes: {},
    loading: false,
    loaded: false,
    selected_note: null
};

export function reducer(
    state: INotes = initialState,
    action: fromActions.NoteActions
): INotes {
    switch (action.type) {
        case fromActions.LOAD_ALL_NOTES: {
            return { ...state, loading: true };
        }
        case fromActions.LOAD_ALL_NOTES_SUCCESS: {
            const notes = Utils.Format.MapToEntities(action.payload, state);
            return {
                ...state,
                loading: false,
                loaded: true,
                notes,
            };
        }
        case fromActions.LOAD_ALL_NOTES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case fromActions.CREATE_NEW_NOTE_SUCCESS: {
            const notes = state.notes
            const newNote = action.payload;

            notes[newNote.id] = newNote;

            return {
                ...state,
                notes
            };
        }
        case fromActions.DELETE_NOTE_SUCCESS: {
            const id = action.payload;
            const { [id]: removed, ...notes } = state.notes;
            return {
                ...state,
                notes,
            };
        }
        case fromActions.SET_SELECTED_NOTE: {
            const selected_note = action.payload;
            return {
                ...state,
                selected_note,
            };
        }

        default:
            return state;
    }
}

export const getWorkspacesNotes = (state: INotes) => <Note[]>Utils.Format.GetEntities(state.notes);
export const getNotesLoaded = (state: INotes) => state.loaded;
export const getSelectedNote = (state: INotes) => state.selected_note;
