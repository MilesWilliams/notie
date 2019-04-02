import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilizationComponent } from './components/utilization/utilization.component';

import { App } from '../core/config/app.config';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'utilization',
				component: UtilizationComponent,
			}
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FeaturesRoutingModule {}
