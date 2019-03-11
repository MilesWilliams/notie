import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './components/navigation/navigation.module';
import { LoginModule } from './components/login/login.module';
import { WorkspacesModule } from './components/workspaces/workspaces.module';

@NgModule({
	imports: [CommonModule, NavigationModule, LoginModule, WorkspacesModule],
	declarations: [],
	exports: [LoginModule, NavigationModule, WorkspacesModule],
})
export class CoreComponentsModule {}
