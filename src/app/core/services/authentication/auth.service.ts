import { Injectable } from '@angular/core';
import { BaseService } from '../base-service/base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/authentication/user.interface';

@Injectable()
export class AuthService extends BaseService {
	constructor(protected _http: HttpClient) {
		super(_http);
	}

	public AuthUser(email_address: string, password: string) {
		const url: string = 'assets/dummy_data/auth-user.json';
		return this._http.get<User>(url);
	}
}
