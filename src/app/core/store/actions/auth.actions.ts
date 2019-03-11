import { Action } from '@ngrx/store';

import { Utils } from '../../../utils';
import { User } from '../../interfaces/authentication/user.interface';
import { AuthPayload } from '../../interfaces/authentication';

export const AUTHENTICATE_USER = Utils.Type('[Core: Auth] Authenticate user');
export const AUTHENTICATE_USER_SUCCESS = Utils.Type(
	'[Core: Auth] Authenticate user success'
);
export const AUTHENTICATE_USER_FAIL = Utils.Type(
	'[Core: Auth] Authenticate user fail'
);

export class AuthenticateUser implements Action {
	readonly type = AUTHENTICATE_USER;
	constructor(public payload: AuthPayload) {}
}

export class AuthenticateUserSuccess implements Action {
	public readonly type = AUTHENTICATE_USER_SUCCESS;
	constructor(public payload: User) {}
}

export class AuthenticateUserFail implements Action {
	public readonly type = AUTHENTICATE_USER_FAIL;
	constructor(public payload: any) {}
}

/**
 * Authentication type.
 * @type {Actions}
 */
export type AuthActions =
	| AuthenticateUser
	| AuthenticateUserSuccess
	| AuthenticateUserFail;
