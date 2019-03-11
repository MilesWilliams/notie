import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as AuthActions from '../actions/auth.actions';

import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services';
import { of } from 'rxjs';
import { Go } from '../actions';

@Injectable()
export class AuthEffects {
	constructor(private actions$: Actions, private _svc: AuthService) {}
	@Effect()
	authUser$ = this.actions$.ofType(AuthActions.AUTHENTICATE_USER).pipe(
		map((action: AuthActions.AuthenticateUser) => action.payload),
		switchMap(credentials => {
			return this._svc
				.AuthUser(credentials.email_address, credentials.password)
				.pipe(
					map(res => new AuthActions.AuthenticateUserSuccess(res)),
					catchError(error =>
						of(new AuthActions.AuthenticateUserFail(error))
					)
				);
		})
	);

	@Effect()
	onUserAuthenticated = this.actions$
		.ofType(AuthActions.AUTHENTICATE_USER_SUCCESS)
		.pipe(
			map(
				(action: AuthActions.AuthenticateUserSuccess) => action.payload
			),
			map(
				_ =>
					new Go({
						path: ['dashboard'],
					})
			)
		);
}
