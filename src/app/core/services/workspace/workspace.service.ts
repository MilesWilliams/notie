import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '../../interfaces/response/http-response.interface';
import { Workspace } from '../../interfaces/workspace/workspace.interface';
import { t } from '@angular/core/src/render3';


@Injectable()
export class WortkspaceService extends BaseService {

    constructor(protected _http: HttpClient) {
        super(_http);
        this._url_modifer = 'workspace';
    }

    /**
     *
     * @param {string} query
     * @returns {Observable<HttpResponse>}
     * @memberof WortkspaceService
     */
    public search(query: string): Observable<HttpResponse<Workspace[]>> {
        return this._http.get<HttpResponse<Workspace[]>>(`${this.URL}/search/${query}`);
    }
}
