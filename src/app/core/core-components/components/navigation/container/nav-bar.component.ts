import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavigationItem } from '../interfaces/navigation';
import { App } from '../../../../config/app.config';
import { CoreState, Go } from '../../../../store';

@Component({
	selector: 'klarity-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
	readonly navItems: NavigationItem[] = App.navigation;
	constructor(private store: Store<CoreState>) {}

	/**
	 *
	 * @param {NavigationItem} [option]
	 * @memberof NavBarComponent
	 */
	onRoute(option?: NavigationItem) {
		this.DeSelectNavItem();
		const item = option ? option : this.navItems[0];
		let index: number;
		if (this.navItems.indexOf(item) < 0) {
			this.navItems.forEach(nav => {
				if (!nav.children.includes(item)) {
					return;
				} else {
					index = nav.children.indexOf(item);
					nav.children[index].active = true;
				}
			});
		} else {
			// this.SelectNavItem(index);
			index = this.navItems.indexOf(item);
			this.navItems[index].active = true;
		}

		console.log(this.navItems);
		this.Navigate(item.path);
	}

	/**
	 *
	 * @private
	 * @param {number} index
	 * @memberof NavBarComponent
	 */
	private SelectNavItem(index: number) {
		if (this.navItems[index]) {
			this.navItems[index].active = true;
		} else {
		}
	}

	/**
	 *
	 * @private
	 * @memberof NavBarComponent
	 */
	private DeSelectNavItem() {
		this.navItems.forEach(item => {
			if (item.children) {
				item.children.forEach(child => {
					child.active = false;
				});
			}

			item.active = false;
		});
	}

	/**
	 *
	 * @private
	 * @param {string} url
	 * @memberof NavBarComponent
	 */
	private Navigate(url: string) {
		this.store.dispatch(
			new Go({
				path: [url],
			})
		);
	}
}
