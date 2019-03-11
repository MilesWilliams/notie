import { AppConfig } from '../interfaces/app/app-config.interface';
import { AuthToken } from '../interfaces/app/auth-token.interface';
import { environment } from '../../../environments/environment';
import { DashboardComponent } from '../../features/dashboard/dashboard.component';
import { BookingsComponent } from '../../features/components/bookings/bookings.component';
import { UtilizationComponent } from '../../features/components/utilization/utilization.component';

/**
 * Set the applications production and develelopment tokens
 * Note: If the app has only one token, remove the developement token as this is optional.
 */
const production_token: string = '4f1b4648b095382ccf64e2f0e89c2d6f';
const development_token: string = 'f144b7e57cdf3101f92eae1aed871f04';

const Tokens: AuthToken = new AuthToken(production_token, development_token);

export const App: AppConfig = {
	cdn_domain: 'http://localhost:8080/public',
	api_domain: 'https://phoenix.klaritysystems.co.za/rest/v2',
	auth_token: Tokens.Token,
	site_name: 'Klarity Angular Boilerplate',
	navigation: [
		{
			page_name: 'Dashboard',
			path: '/dashboard',
			active: false,
			component: DashboardComponent,
			display: true,
			children: [
				{
					page_name: 'Bookings',
					path: '/dashboard/bookings',
					active: false,
					component: BookingsComponent,
					display: true,
				},
				{
					page_name: 'Utilization',
					path: '/dashboard/utilization',
					active: false,
					component: UtilizationComponent,
					display: true,
				},
			],
		},
	],
	maintenance_mode: false,
	production: environment.production,
};
