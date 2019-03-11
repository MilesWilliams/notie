import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilizationComponent } from './components/utilization/utilization.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { App } from '../core/config/app.config';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'utilization',
				component: UtilizationComponent,
			},
			{
				path: 'bookings',
				component: BookingsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FeaturesRoutingModule {}
