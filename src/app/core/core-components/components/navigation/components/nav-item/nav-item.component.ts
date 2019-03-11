import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation';

@Component({
	selector: 'nav-item',
	templateUrl: './nav-item.component.html',
	styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
	@Input()
	nav_item: NavigationItem;
	constructor() {}

	ngOnInit() {}
}
