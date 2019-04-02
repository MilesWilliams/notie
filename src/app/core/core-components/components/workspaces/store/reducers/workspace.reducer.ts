import * as fromActions from '../actions/workspace.actions';
import * as fromNoteActions from '../actions/notes.actions';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Utils } from 'src/app/utils';

export interface IWorkSpaces {
    spaces: { [id: string]: Workspace };
    loading: boolean;
    loaded: boolean;
}
export const initialState: IWorkSpaces = {
    spaces: {},
    loading: false,
    loaded: false,
};

export function reducer(
    state: IWorkSpaces = initialState,
    action: fromActions.WorkspaceActions | fromNoteActions.NoteActions
): IWorkSpaces {
    switch (action.type) {
        case fromActions.LOAD_WORKSPACES: {
            return { ...state, loading: true };
        }
        case fromActions.LOAD_WORKSPACES_SUCCESS: {
            const spaces = Utils.Format.MapToEntities(action.payload, state);
            return {
                ...state,
                loading: false,
                loaded: true,
                spaces,
            };
        }
        case fromActions.LOAD_WORKSPACES_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case fromActions.CREATE_NEW_WORKSPACE_SUCCESS: {
            const spaces = state.spaces
            const newSpace = action.payload;

            spaces[newSpace._id] = newSpace;

            return {
                ...state,
                spaces
            };
        }
        case fromActions.DELETE_WORKSPACE_SUCCESS: {
            const id = action.payload;
            console.log(state.spaces, id);
            const { [id]: removed, ...spaces } = state.spaces;
            return {
                ...state,
                spaces,
            };
        }

        case fromNoteActions.CREATE_NEW_NOTE_SUCCESS: {
            const notepkg = action.payload;
            const spaces = state.spaces;
            if (notepkg && notepkg.workspace_id) {
                const space : Workspace= spaces[notepkg.workspace_id];

                if (!space.notes || !space.notes.length) space.notes = [];
    
                if (notepkg.note) space.notes.push(notepkg.note);
                spaces[notepkg.workspace_id] = space;
    
                return {
                    ...state,
                    spaces
                };
            }
        }

        case fromNoteActions.CREATE_NEW_NOTE_SUCCESS: {
            const notepkg = action.payload;
            console.log(notepkg);

            return state;
        }
    
        default:
            return state;
    }
}

export const getWorkspaces = (state: IWorkSpaces) => Utils.Format.GetStringKeyEntities(state.spaces);
export const getWorkspacesLoaded = (state: IWorkSpaces) => state.loaded;
