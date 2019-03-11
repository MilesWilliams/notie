import { Injectable } from '@angular/core';
import { CanActivate, Params } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

import * as fromCore from '../store';
import * as coreReducer from '../store/reducers';
import { Go, Back } from '../store';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
	constructor(private store: Store<coreReducer.CoreState>) {}

	canActivate(): Observable<boolean> {
		return this.checkStore().pipe(
			switchMap(() => of(true)),
			catchError(() => of(false))
		);
	}

	private checkStore(): Observable<boolean> {
		return this.store.select(fromCore.getIsAuthenticated).pipe(
			tap(isAuthed => {
				if (!isAuthed) {
					this.store.dispatch(new Back());
				}
			}),
			filter(isAuthed => isAuthed),
			take(1)
		);
	}
}
