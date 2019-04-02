import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/core-components/components/login/container/login.component';
import { IsAuthenticatedGuard } from './core/guards';
import { Guards } from './core/core-components/components/workspaces/guards';
import { WorkspaceLoadedGuard } from './core/core-components/components/workspaces/guards/onload.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full',
	},
	{
		path: 'login',
		component: LoginComponent		
	},
	{
		path: 'dashboard',
		loadChildren: './features/features.module#FeaturesModule',
		canActivate: [WorkspaceLoadedGuard]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
