import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
} from '@angular/common/http';
import { RouterState } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { Back, Go } from '../store';
import { App } from '../config/app.config';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
	constructor(private store: Store<RouterState>) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		req = req.clone({
			setHeaders: {
				Authorization: `${App.auth_token}`,
			},
		});

		return next.handle(req);
	}

	private handleAuthError(err): Observable<any> {
		if (err.status === 401 || 403 || 500) {
			err.callback ? err.callback() : window.location.reload();
			this.store.dispatch(new Back());
			return of(err.message);
		}
		if (err.status === 404) {
			this.store.dispatch(
				new Go({
					path: ['/404'],
				})
			);
			return of(err.message);
		}
	}
}
