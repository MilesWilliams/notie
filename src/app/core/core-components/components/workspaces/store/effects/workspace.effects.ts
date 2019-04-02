import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as WorkspaceActions from '../actions/workspace.actions';

import { map, switchMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { WortkspaceService } from 'src/app/core/services';
import { Workspace } from 'src/app/core/interfaces/workspace/workspace.interface';
import { HttpResponse } from 'src/app/core/interfaces/response/http-response.interface';
import { CreateNewNoteSuccess } from '../actions';


@Injectable()
export class WorkSpaceEffects {
    constructor(private actions$: Actions, private _svc: WortkspaceService) { }
    @Effect()
    loadSpaces$ = this.actions$.ofType(WorkspaceActions.LOAD_WORKSPACES).pipe(
        switchMap(() => {
            return this._svc
                .All()
                .pipe(
                    map((res: HttpResponse<Workspace[]>) => new WorkspaceActions.LoadWorkspacesSuccess(<Workspace[]>res.values)),
                    catchError(error =>
                        of(new WorkspaceActions.LoadWorkspacesFail(error))
                    )
                );
        })
    );

    @Effect()
    newWorkSpace = this.actions$
        .ofType(WorkspaceActions.CREATE_NEW_WORKSPACE)
        .pipe(
            map(
                (action: WorkspaceActions.CreateNewWorkspace) => action.payload
            ),
            switchMap((space) => {
                return this._svc
                    .Create(space)
                    .pipe(
                        map((res: HttpResponse<Workspace>)  => new WorkspaceActions.CreateNewWorkspaceSuccess(<Workspace>res.values)),
                        catchError(error =>
                            of(new WorkspaceActions.CreateNewWorkspaceFail(error))
                        )
                    );
            })
        );

        @Effect()
        deleteWorkSpace = this.actions$
            .ofType(WorkspaceActions.DELETE_WORKSPACE)
            .pipe(
                map(
                    (action: WorkspaceActions.DeleteWorkspace) => action.payload
                ),
                switchMap((id) => {
                    return this._svc
                        .Delete(id)
                        .pipe(
                            map((res: HttpResponse<string>)  => new WorkspaceActions.DeleteWorkspaceSuccess(<string>res.values['_id'])),
                            catchError(error =>
                                of(new WorkspaceActions.DeleteWorkspaceFail(error))
                            )
                        );
                })
            );
}
