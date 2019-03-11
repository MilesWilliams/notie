import { Type } from '@angular/core';
import { Route } from '@angular/router';

/**
 *
 * @export
 * @interface NavigationItem
 */
export interface NavigationItem extends Route {
	/*
    * the app page name.
    */
	page_name: string;
	/*
    * boolean value showing if navigation link is active, mainly used to styling.
    */
	active: boolean;
	/*
    * child routes
    */
	children?: NavigationItem[];
	/*
    * boolean value showing if navigation link is active, mainly used to styling.
    */
	display: boolean;
}
