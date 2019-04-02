import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SearchActions from '../actions/search.actions';
import { WortkspaceService } from '../../services';


@Injectable()
export class SearchEffects {
	constructor(private actions$: Actions, private _svc: WortkspaceService) {}
	@Effect()
	onSearch$ = this.actions$.ofType(SearchActions.SEARCH_WORKSPACES).pipe(
		map((action: SearchActions.SearchWorkspaces) => action.payload),
		switchMap((query: string) => {
			return this._svc
				.search(query)
				.pipe(
					map(res => new SearchActions.SearchWorkspacesSuccess(res.values)),
					catchError(error =>
						of(new SearchActions.SearchWorkspacesFail(error))
					)
				);
		})
	);
}
