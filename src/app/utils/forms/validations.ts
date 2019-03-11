import { isString } from 'util';

export interface ValidationTypes {
	email?: boolean;
	defaultValue?: any;
	max?: NumberValidator;
	maxLength?: NumberValidator;
	min?: NumberValidator;
	minLength?: NumberValidator;
	placeholder?: string;
	required?: boolean;
	requiredTrue?: boolean;
}

export interface NumberValidator {
	value?: number;
	required: boolean;
}

export class ValidatorsManager implements ValidationTypes {
	email: boolean = false;
	max: NumberValidator = { required: false };
	maxLength?: NumberValidator = { required: false };
	min: NumberValidator = { required: false };
	minLength: NumberValidator = { required: false };
	required: boolean;
	requiredTrue: boolean;

	constructor(values?: any) {
		if (values) {
			if (isString(values) || typeof values === 'string') {
				Object.keys(JSON.parse(values)).forEach(k =>
					this.initialize(k, values[k])
				);
			} else {
				Object.keys(values).forEach(k => this.initialize(k, values[k]));
			}
		}
	}

	private initialize(name: string, value: any) {
		switch (name) {
			case 'email':
				this.Email = value;
				break;
			case 'max':
				if (value.required) this.setMaxValidator(value.value);
				break;
			case 'maxLength':
				if (value.required) this.setMaxValidator(value.value);
				break;
			case 'min':
				if (value.required) this.setMaxValidator(value.value);
				break;
			case 'minLength':
				if (value.required) this.setMaxValidator(value.value);
				break;
			case 'required':
				this.Required = value;
				break;
			case 'requiredTrue':
				this.RequiredTrue = value;
				break;
			default:
				break;
		}
	}

	get Email(): boolean {
		return this.email;
	}

	set Email(value: boolean) {
		this.email = value;
	}

	get Required(): boolean {
		return this.required;
	}

	set Required(value: boolean) {
		this.required = value;
	}

	get RequiredTrue(): boolean {
		return this.requiredTrue;
	}

	set RequiredTrue(value: boolean) {
		this.requiredTrue = value;
	}

	get Max() {
		return this.max;
	}
	get MaxLength() {
		return this.maxLength;
	}

	get Min() {
		return this.min;
	}
	get MinLength() {
		return this.minLength;
	}

	public setMaxValidator(value: number) {
		this.max = { value: value, required: true };
	}

	public removeMaxValidator() {
		this.max = { required: false };
	}

	public setMaxLengthValidator(value: number) {
		this.maxLength = { value: value, required: true };
	}

	public removeMaxLengthValidator() {
		this.maxLength = { required: false };
	}

	public setMinValidator(value: number) {
		this.min = { value: value, required: true };
	}

	public removeMinValidator() {
		this.min = { required: false };
	}

	public setMinLengthValidator(value: number) {
		this.minLength = { value: value, required: true };
	}

	public removeMinLengthValidator() {
		this.minLength = { required: false };
	}

	public Stringify() {
		const values = {
			email: this.Email,
			max: this.Max,
			maxLength: this.MaxLength,
			min: this.Min,
			minLength: this.MinLength,
			required: this.Required,
			requiredTrue: this.RequiredTrue,
		};
		return JSON.stringify(values);
	}
}
