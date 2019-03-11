import * as fromActions from '../actions/workspace.actions';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { Utils } from 'src/app/utils';

export interface IWorkSpaces {
    spaces: { [id: number]: Workspace };
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
    action: fromActions.WorkspaceActions
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
            const newSpace  = action.payload;

            spaces[newSpace.id] = newSpace;

            return {
                ...state,
                spaces
            };
        }
        case fromActions.DELETE_WORKSPACE_SUCCESS: {
            const id = action.payload;
            const { [id]: removed, ...spaces } = state.spaces;
            return {
				...state,
				spaces,
			};
        }

        default:
            return state;
    }
}

export const getWorkspaces = (state: IWorkSpaces) => Utils.Format.GetEntities(state.spaces);
export const getWorkspacesLoaded = (state: IWorkSpaces) => state.loaded;
