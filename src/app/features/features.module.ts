import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from '../core/core.module';
import { UtilizationComponent } from './components/utilization/utilization.component';

@NgModule({
	imports: [CommonModule, FeaturesRoutingModule, CoreModule],
	declarations: [DashboardComponent, UtilizationComponent],
})
export class FeaturesModule {}
