import { Component, Input } from '@angular/core';

@Component({
	selector: 'notie-btn',
	templateUrl: './notie-btn.component.html',
	styleUrls: ['./notie-btn.component.scss'],
})
export class NotieBtnComponent {
	@Input() icon: 'add' | 'delete' = 'add';
	@Input() size: 'large' | 'small' ='large';
}
