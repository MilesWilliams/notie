import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from '../core/core.module';
import { UtilizationComponent } from './components/utilization/utilization.component';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
	imports: [CommonModule, FeaturesRoutingModule, CoreModule],
	declarations: [DashboardComponent, UtilizationComponent, BookingsComponent],
})
export class FeaturesModule {}
