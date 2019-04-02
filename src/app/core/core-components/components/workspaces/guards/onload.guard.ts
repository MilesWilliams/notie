import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromFeature from '../store';
import { WorkSpacesState } from '../store/reducers';

@Injectable()
export class WorkspaceLoadedGuard implements CanActivate {
    constructor(private store: Store<WorkSpacesState>) { }

    canActivate(): Observable<boolean> {
        return forkJoin(
            this.checkWorkspaces()
        ).pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    // Checking if workspaces have been loaded , if not then fire action.
    private checkWorkspaces(): Observable<boolean> {
        return this.store.select(fromFeature.workspacesLoad).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromFeature.LoadWorkspaces());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    };

    // Checking if notes have been loaded , if not then fire action.
    private checkNotes(): Observable<Boolean> {
        return this.store.select(fromFeature.notesLoad).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(new fromFeature.LoadNotes());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    };
}
