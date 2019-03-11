import { Injectable } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { App } from '../../config/app.config';

const APP_TITLE = App.site_name;
const SEPARATOR = ' > ';

@Injectable()
export class DynamicTitleService {
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title
	) {}

	init() {
		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				map(() => this.activatedRoute),
				map(route => route.firstChild),
				switchMap(route => route.data),
				map(data => {
					if (data.title) {
						// If a route has a title set (e.g. data: {title: "Foo"}) then we use it
						return data.title;
					} else {
						// If not, we do a little magic on the url to create an approximation
						return this.router.url
							.split('/')
							.reduce((acc, frag) => {
								if (acc && frag) {
									acc += SEPARATOR;
								}
								return this.router.url
									.split('/')
									.reduce((acc, frag) => {
										if (acc && frag) {
											acc += SEPARATOR;
										}
										return (
											acc +
											DynamicTitleService.ucFirst(frag)
										);
									});
							});
					}
				})
			)
			.subscribe(pathString =>
				this.titleService.setTitle(`${APP_TITLE} | ${pathString}`)
			);
	}

	static ucFirst(string) {
		if (!string) {
			return string;
		}
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}
