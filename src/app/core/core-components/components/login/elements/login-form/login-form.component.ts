import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
	@Input()
	form: FormGroup;

	@Output()
	submit: EventEmitter<any> = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	onSubmit() {
		this.submit.emit('click');
	}
}
