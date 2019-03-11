import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NotesService extends BaseService {
    constructor(protected _http: HttpClient) {
        super(_http);
        this._url_modifer = 'notes';
    }
}
