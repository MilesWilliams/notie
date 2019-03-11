import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { App } from './core/config/app.config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	StoreRouterConnectingModule
} from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { interceptors } from './core/interceptors';
import { CoreStateReducer, Effects, RouteSerializer } from './core/store';
import { AppRoutingModule } from './notie-routing.module';
import { CoreGuards } from './core/guards';
import { UIElementsModule } from './shared/ui-elements/ui-elements.module';

@NgModule({
	imports: [
		BrowserModule,
		CoreModule,
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot({ CoreState: CoreStateReducer }),
		EffectsModule.forRoot(Effects),
		!App.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule,
		UIElementsModule
	],
	declarations: [AppComponent],
	providers: [...interceptors],
	bootstrap: [AppComponent],
})
export class AppModule {}
