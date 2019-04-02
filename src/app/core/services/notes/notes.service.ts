import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../../interfaces/notes/note.interface';


@Injectable()
export class NotesService extends BaseService {
    constructor(protected _http: HttpClient) {
        super(_http);
        this._url_modifer = 'notes';
    }

    Create(note: Note, space_id: string): Observable<any> {
        const url = `${this.URL}/${space_id}`;
        return this._http.post(url, note);
    }
}
