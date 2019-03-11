import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'form-input-field',
	templateUrl: './input-field.component.html',
	styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
	@Input()
	childFormGroup: FormGroup;
	@Input()
	childFormControlName: string;
	@Input()
	label: string;
	@Input()
	type: string;
	@Input()
	placeholder: string;

	@Input()
	onError: string = '';
	constructor() {}

	ngOnInit() {}
}
