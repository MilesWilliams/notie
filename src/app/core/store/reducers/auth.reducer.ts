import * as fromActions from '../actions/auth.actions';
import { User } from '../../interfaces/authentication/user.interface';

export interface IAuthState {
	user: User;
	authenticated: boolean;
	loading: boolean;
	loaded: boolean;
}
export const initialState: IAuthState = {
	user: undefined,
	authenticated: false,
	loading: false,
	loaded: false,
};

export function reducer(
	state: IAuthState = initialState,
	action: fromActions.AuthActions
): IAuthState {
	switch (action.type) {
		case fromActions.AUTHENTICATE_USER: {
			return { ...state, loading: true };
		}
		case fromActions.AUTHENTICATE_USER_SUCCESS: {
			const user = action.payload;
			return {
				...state,
				loading: false,
				loaded: true,
				authenticated: true,
				user,
			};
		}
		case fromActions.AUTHENTICATE_USER_FAIL: {
			return {
				...state,
				loading: false,
				loaded: false,
				authenticated: false,
			};
		}

		default:
			return state;
	}
}

export const getAuthUser = (state: IAuthState) => state.user;
export const isAuthenticated = (state: IAuthState) => state.authenticated;
export const getAuthLoaded = (state: IAuthState) => state.loaded;
