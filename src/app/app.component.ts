import { Component } from '@angular/core';
import { App } from './core/config/app.config';

@Component({
	selector: 'notie-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = App.site_name;
}
