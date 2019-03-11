import { environment } from '../../../../environments/environment.prod';

/**
 * @export
 * @interface AuthToken
 * @description the applications bearer tokens.
 */
export class AuthToken {
	/**
	 *
	 * @type {string}
	 * @memberof AuthToken
	 * @description production bearer token
	 */
	production: string;
	/**
	 *
	 *
	 * @type {string}
	 * @memberof AuthToken
	 * @description optional: development bearer token.
	 */
	development?: string;

	constructor(production_token: string, development_token?: string) {
		this.production = production_token;
		if (development_token) this.development = development_token;
	}

	/**
	 *
	 * @readonly
	 * @type {string}
	 * @memberof AuthToken
	 */
	get Token(): string {
		if (this.development) {
			return environment.production ? this.production : this.development;
		} else {
			return this.production;
		}
	}
}
