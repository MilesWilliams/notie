import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

import { App } from '../../config/app.config';

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	/**
	 * @description The base api url
	 * @type {string}
	 * @memberof BaseService
	 */
	public readonly _domain: string = App.api_domain;
	/**
	 * @description The modifier is used to add unique api endpoint identifer
	 * @type {string}
	 * @memberof BaseService
	 */
	public _url_modifer: string;

	constructor(protected _http: HttpClient) { }

	/**
	 *
	 *
	 * @readonly
	 * @type {string}
	 * @memberof BaseService
	 */
	get BaseURL(): string {
		return this._domain;
	}

	/**
	 *
	 *
	 * @type {string}
	 * @memberof BaseService
	 */
	get UrlModifer(): string {
		return this._url_modifer;
	}

	/**
	 *
	 * @memberof BaseService
	 * @description the url modifer is used to add custom endpoints onto the _domain.
	 * @example ${_domain}/{'url_modifer'}
	 */
	set UrlModifer(modifer: string) {
		this._url_modifer = modifer;
	}

	/**
	 *
	 *
	 * @readonly
	 * @type {string}
	 * @memberof BaseService
	 */
	get URL(): string {
		return this.UrlModifer
			? `${this.BaseURL}/${this.UrlModifer}`
			: this.BaseURL;
	}

	/**
	 *
	 *
	 * @template T
	 * @returns {Observable<T>}
	 * @memberof BaseService
	 */
	public All<T>(): Observable<T> {
		return this._http.get<T>(this.URL);
	}

	/**
	 *
	 * @template T
	 * @param {Object} values
	 * @param {string} [insert_custom_url]
	 * @returns {Observable<any>}
	 * @memberof BaseService
	 */
	public Create<T>(
		values: Object,
		insert_custom_url?: string
	): Observable<any> {
		const url: string = insert_custom_url
			? insert_custom_url
			: `${this.URL}/create`;
		return this._http.post<T>(url, values);
	}

	/**
	 *
	 *
	 * @template T
	 * @param {Object} values
	 * @returns {Observable<any>}
	 * @memberof BaseService
	 */
	public Update<T>(values: any, insert_custom_url?: string): Observable<any> {
		const url: string = insert_custom_url
			? insert_custom_url
			: `${this.URL}/${values.id}`;
		return this._http.patch<T>(this.URL, values);
	}

	/**
	 *
	 *
	 * @param {number} id
	 * @returns {Observable<number>}
	 * @memberof BaseService
	 */
	public Delete(id: number, insert_custom_url?: string): Observable<number> {
		const url: string = insert_custom_url
			? insert_custom_url
			: `${this.URL}/${id}`;
		const params: Params = {
			id,
		};
		return this._http.delete<number>(this.URL, params);
	}
}
