import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './core-components/core-components.module';

import { services } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreGuards } from './guards';

@NgModule({
	imports: [
		CommonModule,
		CoreComponentsModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
	],
	declarations: [],
	exports: [CoreComponentsModule],
	providers: [...services, ...CoreGuards],
})
export class CoreModule {}
