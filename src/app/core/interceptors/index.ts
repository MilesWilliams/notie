import { AuthTokenInterceptor } from './auth-token.interceptor';
import { ClassProvider } from '@angular/core';
import { App } from '../config/app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouteSerializer } from '../store';

const interceptorProviders: ClassProvider[] = [
	{
		provide: RouterStateSerializer,
		useClass: RouteSerializer,
	},
];

// Checking to see if auth token has been set.
if (App.auth_token) {
	interceptorProviders.push({
		provide: HTTP_INTERCEPTORS,
		useClass: AuthTokenInterceptor,
		multi: true,
	});
}

export const interceptors: any[] = interceptorProviders;
export { AuthTokenInterceptor } from './auth-token.interceptor';
