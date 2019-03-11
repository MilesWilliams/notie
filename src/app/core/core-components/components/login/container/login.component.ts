import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CoreState, AuthenticateUser } from '../../../../store';
import { AuthPayload } from '../../../../interfaces/authentication';

@Component({
	selector: 'notie-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	constructor(private fb: FormBuilder, private store: Store<CoreState>) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email_address: this.fb.group({
				email_address: this.fb.control(
					'',
					Validators.compose([Validators.required, Validators.email])
				),
			}),
			password: this.fb.group({
				password: this.fb.control('', Validators.required),
			}),
		});
	}

	public onLogin() {
		if (this.loginForm.valid) {
			let userCredentials: AuthPayload = {};
			Object.keys(this.loginForm.getRawValue()).forEach(key => {
				return (userCredentials[key] = this.loginForm.getRawValue()[
					key
				][key]);
			});

			this.store.dispatch(new AuthenticateUser(userCredentials));
		}
	}
}
