import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import * as NotesActions from '../actions/notes.actions';

import { map, switchMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { NotesService } from 'src/app/core/services';
import { Note } from 'src/app/core/interfaces/notes/note.interface';

@Injectable()
export class NotesEffects {
    constructor(private actions$: Actions, private _svc: NotesService) { }
    @Effect()
    loadNotes$ = this.actions$.ofType(NotesActions.LOAD_ALL_NOTES).pipe(
        switchMap(() => {
            return this._svc
                .All()
                .pipe(
                    map(res => new NotesActions.LoadNotesSuccess(<Note[]>res)),
                    catchError(error =>
                        of(new NotesActions.LoadNotesFail(error))
                    )
                );
        })
    );

    @Effect()
    newNote = this.actions$
        .ofType(NotesActions.CREATE_NEW_NOTE)
        .pipe(
            map(
                (action: NotesActions.CreateNewNote) => action.payload
            ),
            switchMap((note) => {
                return this._svc
                    .Create(note)
                    .pipe(
                        map(res => new NotesActions.CreateNewNoteSuccess(<Note>res)),
                        catchError(error =>
                            of(new NotesActions.CreateNewNoteFail(error))
                        )
                    );
            })
        );

        @Effect()
        deleteNote = this.actions$
            .ofType(NotesActions.DELETE_NOTE)
            .pipe(
                map(
                    (action: NotesActions.DeleteNote) => action.payload
                ),
                switchMap((id) => {
                    return this._svc
                        .Delete(id)
                        .pipe(
                            map(res => new NotesActions.DeleteNoteSuccess(<number>res)),
                            catchError(error =>
                                of(new NotesActions.DeleteNoteFail(error))
                            )
                        );
                })
            );
}
