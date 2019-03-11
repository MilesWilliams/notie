import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

import { Utils } from '../../../utils';

export const GO = Utils.Type('[Router] Go');
export const BACK = Utils.Type('[Router] Backward');
export const FORWARD = Utils.Type('[Router] Foreward');

export class Go implements Action {
	readonly type = GO;
	constructor(
		public payload: {
			path: any[];
			query?: object;
			extras?: NavigationExtras;
		}
	) {}
}

export class Back implements Action {
	public readonly type = BACK;
}

export class Forward implements Action {
	public readonly type = FORWARD;
}

/**
 * Router type.
 * @type {Actions}
 */
export type RouterActions = Go | Back | Forward;
